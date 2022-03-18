import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface Todos1CreationAttrs {
	body: string
}

@Table({tableName: "todos1"})
export class Todos1 extends Model<Todos1, Todos1CreationAttrs> {

	@ApiProperty({example: '1', description: "Уникальный идентификатор"})
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true
	})
	id: number

	@ApiProperty({example: 'Задача 1', description: "Тело задачи"})
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false
	})
	body: string

}
