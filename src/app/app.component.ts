import { Component } from '@angular/core';
import { Alumno, listaAlumnos } from './interfaces/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // public lista:Alumno[] = listaAlumnos;
  // public parcial1:number = 0;
  // public parcial2:number = 0;
  // public parcial3:number = 0;
  // public total: number = 0;

  // onPromedio(): number{
  //   this.total = 0;
  //   this.total =(this.parcial1+this.parcial2+this.parcial3)/3
  //   console.log("El promedio es: "+ this.total);
  //   return this.total;
  // }

  // //Guardar posicion
  // public posicion: number = -1;
  // guardarPos(i: number){
  //   this.total = 0;
  //   this.posicion = i;
  // }
  
  // //Guardar notas
  // guardarNota(){
  //   this.parcial1 = 0;
  //   this.parcial2 = 0;
  //   this.parcial3 = 0;
  //   this.lista[this.posicion].nota=this.total;
  //   console.log("Se guardó la nota");
  // }

  // onConfirmar(){
  //   alert("Se publicaron las notas");
  // }
}