import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getImages():Observable<any>{
    return this._http.get("https://jsonplaceholder.typicode.com/photos")
  }

  getSingleImg(id:String):Observable<any>{
    return this._http.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }

  register(data:any):Observable<any>{
    return this._http.post("localhost://3000/user/register", data)
  }

  getSingleUser(id:String):Observable<any>{
    return this._http.get(`localhost://3000/user/single/${id}`)
  }
}
