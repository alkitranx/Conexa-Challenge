import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // se configura aca la tuberia de validaciones de forma global
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const config = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setDescription(
      'Microservicio encargado de la autenticación y de las credenciales.',
    )
    .setVersion(process.env.npm_package_version)
    .addBearerAuth(undefined, 'User Token')
    .addBearerAuth(undefined, 'Administrator Token')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // configuramos la ruta, si queremos el buscador y los filtros por tag. Seteamos la duración del request para que nos aparezca
  SwaggerModule.setup('api/docs', app, document, {
    explorer: false,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });
  await app.listen(3000);
}
bootstrap();
