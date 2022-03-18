import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

	constructor(private userService: UsersService) {
	}

	@ApiOperation({summary: "Создать пользователя"})
	@ApiResponse({status: 200, type: User})
	@UsePipes(ValidationPipe)
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.userService.createUser(userDto)
	}

	@ApiOperation({summary: "Получить всех пользователей"})
	@ApiResponse({status: 200, type: [User]})
	@UseGuards(JwtAuthGuard)
	@Get()
	getAll() {
		return this.userService.getAllUsers()
	}

}
