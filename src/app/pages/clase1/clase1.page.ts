import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno, Codigo } from 'src/app/app.model';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.page.html',
  styleUrls: ['./clase1.page.scss'],
})
export class Clase1Page implements OnInit {

  pageTitle = 'Clase 1 Portafolio';
  isNotHome = true;
  formularioAsistencia: FormGroup;
  alumnos:Alumno[];

  codigo: any ={
    id: '',
  }

  cod='1111'
  
  constructor(private alumnosService: AlumnosService) { 
    this.formularioAsistencia = new FormGroup({
      rut: new FormControl(),
      nombre: new FormControl(),
      apellidop: new FormControl(),
      apellidom: new FormControl()
    })

    this.alumnos= [{rut:'',nombre:'',apellidop:'',apellidom:''}]
  }

  ngOnInit(): void {
    this.alumnosService.getAlumno().subscribe(alumnos => {
      this.alumnos = alumnos;
    })
  }

  async onSubmit() {
    if (this.codigo.id === this.cod){
      console.log(this.formularioAsistencia.value)
      const response = await this.alumnosService.addAlumno(this.formularioAsistencia.value);
      console.log(response);
    }else{
      console.log("incorrecto")
    }
  }
}
