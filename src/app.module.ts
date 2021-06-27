import { DatabaseModule } from './database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { MensajesService } from './services/mensajes/mensajes.service';
import { mensajeProviders } from './providers/mensaje.providers';

@Module({
  imports: [
        DatabaseModule, ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService, ...mensajeProviders],
})
export class AppModule {}
