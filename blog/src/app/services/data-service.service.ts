import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {

  }

  get(id){
    return this.http.get(this.url + '/photos/' + id)
      .pipe();
  }

  getAll(){
    return this.http.get(this.url + '/photos')
      .pipe(
        map((x: any[])=> x.slice(0,20))
      );
  }
}
