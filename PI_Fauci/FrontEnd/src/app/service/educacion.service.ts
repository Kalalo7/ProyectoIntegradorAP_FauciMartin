import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private URL = 'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL+'all');
  }
  public addEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.URL+'add',educacion);
  }
  public updateEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(this.URL+'update',educacion);
  }
  public deleteEducacion(educacionId:number):Observable<void>{
    return this.http.delete<void>(this.URL+'delete/{educacionId}');
  }


}
