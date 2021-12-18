import { Habitacion } from "./Habitacion";
import { Hospedaje } from "./Hospedaje";
import { Persona } from "./Persona";

export class Reserva{
    idReserva:number;
    descripcion:string;
    fecha:string;
    clientes:Persona[];
    hospedajes:Hospedaje[];
    habitacion:Habitacion[];
}