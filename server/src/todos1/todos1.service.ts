import {Injectable} from '@nestjs/common';
import {Todos1} from "./todos1.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateTodos1Dto} from "./dto/create-todos1.dto";

@Injectable()
export class Todos1Service {
	constructor(@InjectModel(Todos1) private todos1Repository: typeof Todos1) {
	}

	async createTodos1(dto: CreateTodos1Dto) {
		return await this.todos1Repository.create(dto)
	}

	async getAllTodos1() {
		return await this.todos1Repository.findAll()
	}

	async findOne(id):Promise<Todos1> {
		return await this.todos1Repository.findOne({where: {id}})
	}

	async removeTodo1ById(id) {
		return await this.todos1Repository.destroy({where: {id}})
	}

	async update(id, todo){
		const [numberOfAffectedRows, [updatedTodo]] = await this.todos1Repository.update({ ...todo }, { where: { id }, returning: true });
		return { numberOfAffectedRows, updatedTodo };
	}

}
