import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { VersioningType } from "@nestjs/common";
import { PORT } from "./env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //v1, v2...
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(PORT);
}
bootstrap();
