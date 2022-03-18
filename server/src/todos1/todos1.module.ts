import {forwardRef, Module} from '@nestjs/common';
import {Todos1Controller} from './todos1.controller';
import {Todos1Service} from './todos1.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Todos1} from "./todos1.model";
import {AuthModule} from "../auth/auth.module";

@Module({
	controllers: [Todos1Controller],
	providers: [Todos1Service],
	imports: [
		SequelizeModule.forFeature([Todos1]),// Добавить Пост
		forwardRef(() => AuthModule),
	],
	exports: [
		Todos1Service,
	]
})
export class Todos1Module {
}
