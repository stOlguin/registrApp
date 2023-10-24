import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Alumno } from '../app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private firestore: Firestore) { }

  addAlumno(alumno: Alumno){
    const alumnoRef = collection(this.firestore, 'alumnos');
    return addDoc(alumnoRef, alumno);
  }

  getAlumno(): Observable<Alumno[]>{
    const alumnoRef = collection(this.firestore, 'alumnos');
    return collectionData (alumnoRef,{idField: 'id'}) as Observable<Alumno[]>;
  }
}
