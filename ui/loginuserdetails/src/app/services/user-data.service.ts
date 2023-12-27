import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  url="http://localhost:5038/api/Loginuserlist/GetNotes";
  users()
  {
    return this.http.get(this.url);

  }
}
