import {HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'
import {User} from "../users/user.model";

@Injectable()
export class AuthService {
	constructor(private userService: UsersService, private jwtService: JwtService) {

	}

	async login(userDto: CreateUserDto) {
		const user = await this.validateUser(userDto)
		return this.generateToken(user)
	}

	async register(userDto: CreateUserDto) {
		const {email, password} = userDto
		const candidate = await this.userService.getUserByEmail(email)
		if (candidate) {
			throw new HttpException(`Пользователь с такой почтой уже существует`, HttpStatus.BAD_REQUEST)
		}
		const hashPassword = await bcrypt.hash(password, 10)
		const user = await this.userService.createUser({...userDto, password: hashPassword})
		return this.generateToken(user)
	}

	private async generateToken(user: User) {
		const {id, email} = user
		const payload = {id, email}
		return {
			token: this.jwtService.sign(payload)
		}
	}

	private async validateUser(userDto: CreateUserDto) {
		const {email, password} = userDto
		const user = await this.userService.getUserByEmail(email)
		const passwordEquals = await bcrypt.compare(password, user.password)
		if (user && passwordEquals) {
			return user
		}
		throw new UnauthorizedException({message: "Некорректные почта или пароль"})
	}
}
