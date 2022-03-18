import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateTodos1Dto {

	@ApiProperty({
		example: 'Задача 1',
		description: "Тело задачи"
	})
	readonly body: string
}
