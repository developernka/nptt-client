import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBaseUrl = environment.apiBaseUrl;
  currentUser : Observable<any>;
  apiData = {};

  constructor(private http: HttpClient) {
    this.currentUser = new Observable<any>((observer: Observer<string>) => {
      this.http.get("http://localhost/user.php",{responseType:"text"})
        .subscribe((response:any) => observer.next(response));
    });
  }

  getFromAPI(path:string,refresh?:boolean): Observable<any>{
    if(this.apiData[path] == undefined || refresh){
      return new Observable<any>((observer: Observer<any>) => {
        this.http.get(this.apiBaseUrl+path)
          .subscribe((response:any) => {
            this.apiData[path] = response;
            observer.next(response);
          });
      });
    }else{
      console.log(this.apiData);
      return new Observable<any>((observer: Observer<any>) => {
        observer.next(this.apiData[path]);
      });
    }
  }
}
