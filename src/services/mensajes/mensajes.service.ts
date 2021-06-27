import { Inject, Injectable } from '@nestjs/common';
import { Mensaje } from 'src/mensajes/entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from '../../mensajes/dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(
        @Inject('MENSAJE_REPOSITORY')
        private mensajeRepository: Repository<Mensaje>,
    ){}

    async getAll(): Promise<Mensaje[]>{
        return await this.mensajeRepository.find()
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<any> {
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;

        return await this.mensajeRepository.save(nuevo);
    }

    async updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<any> {
        const mensaje = await this.mensajeRepository.findOne(idMensaje)
        mensaje.mensaje = mensajeActualizar.mensaje;
        mensaje.nick = mensajeActualizar.nick;
        return await this.mensajeRepository.save(mensaje);
    }

    async deleteMensaje(idMensaje): Promise<any> {
        return await this.mensajeRepository.delete(idMensaje)
    }
}
