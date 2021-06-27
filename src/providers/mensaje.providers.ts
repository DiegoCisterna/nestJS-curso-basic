
import { Mensaje } from 'src/mensajes/entities/mensaje.entity';
import { Connection } from 'typeorm';

export const mensajeProviders = [
  {
    provide: 'MENSAJE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Mensaje),
    inject: ['DATABASE_CONNECTION'],
  },
];