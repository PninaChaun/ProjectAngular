import { DatePipe } from '@angular/common';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseClass } from 'src/app/Classes/ResponseClass';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  env=environment;
  constructor(public dpipe:DatePipe, public http:HttpClient) { }

  message:string='🎁בהוספת תגובה תהיה זכאי למתנה';
  date:string=(this.dpipe.transform(Date.now(),'dd-MM-YYYY')??'today') +'📆';
  // date:any=Date.now();

  getAll():Observable<ResponseClass[]>{
    return this.http.get<ResponseClass[]>(this.env.URL+'/Response');
  }

  ppost(r:ResponseClass):Observable<ResponseClass[]>{
    return this.http.post<ResponseClass[]>(this.env.URL+'/Response',r);
  }

  addLike(id:number){
      return  this.http.put(this.env.URL+'/Response',id);
  }

  getServices():Observable<string []>{
    return this.http.get<string[]>(this.env.URL+'/Services');
  }
}
