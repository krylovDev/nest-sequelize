import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
	Request,
	Response,
	NotFoundException, Put
} from '@nestjs/common';
import {Todos1Service} from "./todos1.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateTodos1Dto} from "./dto/create-todos1.dto";
import {Todos1} from "./todos1.model";

@ApiTags('Задачи')
@Controller('todos1')
export class Todos1Controller {
	constructor(private todos1Service: Todos1Service) {
	}

	@ApiOperation({summary: "Создать задачу"})
	@ApiResponse({status: 200, type: Todos1})
	@UsePipes(ValidationPipe)
	@Post()
	create(@Body() dto: CreateTodos1Dto) {
		return this.todos1Service.createTodos1(dto)
	}

	@ApiOperation({summary: "Создать задачу"})
	@ApiResponse({status: 200, type: [Todos1]})
	@UsePipes(ValidationPipe)
	@Get()
	getAll(@Body() dto: CreateTodos1Dto) {
		return this.todos1Service.getAllTodos1()
	}

	@ApiOperation({summary: ""})
	@ApiResponse({status: 200, type: Todos1})
	@UsePipes(ValidationPipe)
	@Get(":id")
	findOne(@Param() id: number) {
		return this.todos1Service.findOne(id)
	}

	@Put(":id")
	async update(
		@Param("id") id: number,
		dto: CreateTodos1Dto,
		@Request() req,
		@Response() res
	):Promise<Todos1> {

		const { numberOfAffectedRows, updatedTodo } = await this.todos1Service.update(id, dto);

		if(!numberOfAffectedRows){
			throw new NotFoundException('Такой задачи не существует')
		}
		return updatedTodo
	}

	@Delete(":id")
	async remove(
		@Param("id") id: number,
		@Request() req,
		@Response() res
	) {
		const deletedTodos1 = await this.todos1Service.removeTodo1ById(id)

		if(!deletedTodos1){
			throw new NotFoundException('Такой задачи нет')
		}
		return res.send({message:'Задача успешно удалена'})
	}

}
