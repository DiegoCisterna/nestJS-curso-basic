import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from '../services/mensajes/mensajes.service';
import { response } from 'express';

@Controller('mensajes')
export class MensajesController {
    constructor(private _mensajesService: MensajesService){

    }

    @Post()
    createOne(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
        this._mensajesService.createMensaje(createMensajeDto).then(mensaje =>{
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch(error =>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la creacion de mensaje"});
        })
       
    }
    
    @Get()
    getAll(@Res() response) {
       this._mensajesService.getAll().then(mensajesList => {
        response.status(HttpStatus.OK).json(mensajesList)
       }).catch(error=>{
        response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error al traer los mensajes"});
       })
    }

    
    @Put(':id')
   async updateOne(
        @Param('id') id: number,
        @Body() updateMensajeDto: CreateMensajeDto,
        @Res() response
    ) {
        await console.log("data update ", updateMensajeDto, id);
        
      this._mensajesService.updateMensaje(id, updateMensajeDto).then(mensajeUpdated => {
        response.status(HttpStatus.OK).json(mensajeUpdated);
      }).catch(error => {
        console.log("error: update", error);
        response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error al actualizar el mensaje"});
      });
    }

    @Delete(':id')
    async deleteOne(
        @Param('id') idMensaje: number,
        @Res() response
    ) {
        this._mensajesService.deleteMensaje(idMensaje).then(mensajeDelete => {
            response.status(HttpStatus.OK).json(mensajeDelete)
        })
        .catch(error => {
            console.log("error: delete", error);
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error al borrar el mensaje"});
        });
    }
      
}
