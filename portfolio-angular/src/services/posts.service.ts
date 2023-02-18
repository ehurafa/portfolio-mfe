import { environment } from './../environments/environment';
import { Job } from '../app/job/job.model';

import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import {map, catchError } from 'rxjs/operators';

export interface Cert {
  name: string;
}




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postAPI = environment.postAPI;
  postsAPI = environment.postsAPI;

  colorEmmit = new EventEmitter<string>();

  color: string | undefined;

  constructor( 
    private http: HttpClient 
    ) { 

  }
 
  getPosts(): Observable<Job> {

    return  this.http.get<Job>(this.postsAPI).pipe(
        map(obj => obj)
      );
     
    } 

  getPost(id: number): Observable<Job> {
    const url = `${this.postAPI}/${id}`;
    return this.http.get<Job>(url).pipe(
      map(obj => obj),
      catchError(e =>  this.errorHandler(e))
    )
    }

    getCerts(): any  {

      const foo: Cert = { name: 'b'};

      return [ foo ]
       
      } 
 
 showMessage(msg: string, isError: boolean = false): void {
    // this.snackBar.open(msg, 'x', {
    //   duration: 5000,
    //   horizontalPosition: "right",
    //   verticalPosition: "top",
    //   panelClass: isError ? ['msg-error'] : ['msg-success']
    // })
    console.log('ERROR ', msg);
  }

  errorHandler(e: any): Observable<any> {
   // console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }  
  
  // getColorPage(): any {
  //   return this.color;
  // }

  setColorPage(color: any) {
    this.color = color;
    this.colorEmmit.emit(color);
  }
}
