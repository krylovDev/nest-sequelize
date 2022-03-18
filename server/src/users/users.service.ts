import {Injectable} from '@nestjs/common';
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private userRepository: typeof User) {

	}
	async createUser(dto: CreateUserDto) {
		return await this.userRepository.create(dto)
	}

	async getAllUsers() {
		return await this.userRepository.findAll()
	}

	async getUserByEmail(email: string){
		return await this.userRepository.findOne({where:{email}})
	}

}
