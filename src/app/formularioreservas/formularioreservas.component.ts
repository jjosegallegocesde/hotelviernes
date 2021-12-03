import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularioreservas',
  templateUrl: './formularioreservas.component.html',
  styleUrls: ['./formularioreservas.component.css']
})

export class FormularioreservasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agregarReserva(datos:NgForm){
    console.log(datos.value)

    let datosEnvio={

      nombre:"Juan",
      telefono:"12345687",
      fechaInicio:datos.value.entrada,
      fechaFin:datos.value.salida,
      numeroPersonas:Number(datos.value.adultos)+Number(datos.value.ninos)

    }

    console.log(datosEnvio)

  }

}
