import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@ApiTags('Авторизация')
@Controller('')
export class AuthController {

	constructor(private authService: AuthService) {
	}

	@Post('/api/login')
	@UsePipes(ValidationPipe)
	login(@Body() userDto: CreateUserDto) {
		return this.authService.login(userDto)
	}

	@Post('/api/register')
	@UsePipes(ValidationPipe)
	register(@Body() userDto: CreateUserDto) {
		return this.authService.register(userDto)
	}

}
