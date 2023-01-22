import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import {GlobalLogger} from "./middlewares/GlobalLogger";
import {GlobalExceptionFilter} from "./filters/globalExceptionFilter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new GlobalLogger().use);
  app.useGlobalFilters(new GlobalExceptionFilter())
  await app.listen(3000);
}
bootstrap();
