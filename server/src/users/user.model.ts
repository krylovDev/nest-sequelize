import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
	email: string
	password: string
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttrs> {

	@ApiProperty({example: '1', description: "Уникальный идентификатор"})
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true
	})
	id: number

	@ApiProperty({example: 'user@mail.ru', description: "Почтовый адрес"})
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false
	})
	email: string

	@ApiProperty({example: '1234567890', description: "Пароль пользователя"})
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false
	})
	password: string

	// @HasMany(() => Record)
	// records:Record[]
}
