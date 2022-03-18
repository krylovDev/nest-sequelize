import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
const cors = require('cors')

async function start(){
	const app = await NestFactory.create(AppModule)
	app.use(cors())

	const config = new DocumentBuilder()
		.setTitle('Бэкенд для тестового задания')
		.setDescription('NestJS REST API')
		.setVersion('1.0.0')
		.addTag('Vladimir Krylov')
		.build()

	const document = SwaggerModule.createDocument(app,config)
	SwaggerModule.setup('/api/docs',app,document)

	await app.listen(`${process.env.PORT}`,() => {
		console.log(`Сервер запущен http://localhost:${process.env.PORT}`)
	})
}
start()
