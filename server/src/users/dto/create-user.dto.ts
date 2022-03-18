import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

	@ApiProperty({
		example: 'user@mail.ru',
		description: "Почтовый адрес"
	})
	@IsString({
		message: 'Адрес почты должен быть строкой'
	})
	@IsEmail({}, {
		message: "Некорректный адрес почты"
	})
	readonly email: string

	@ApiProperty({
		example: '1234567890',
		description: "Пароль пользователя"
	})
	@IsString({
		message: 'Пароль должен быть строкой'
	})
	@Length(4, 16, {
		message: "Пароль должен быть длиной от 4 до 16 символов"
	})
	readonly password: string
}
