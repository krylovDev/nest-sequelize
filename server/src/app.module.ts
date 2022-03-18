import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/user.model";
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./auth/auth.module";
import {Todos1} from "./todos1/todos1.model";
import {Todos1Module} from "./todos1/todos1.module";

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`
		}),
		SequelizeModule.forRoot({
			dialect: "postgres",
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			models: [User,Todos1],
			autoLoadModels: true
		}),
		UsersModule,
		Todos1Module,
		AuthModule,
	]
})
export class AppModule {
}
