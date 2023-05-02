import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) {}

  getUsers(): Observable<User[]> {
     return this.http.get<User[]>('${apiUrl}/users');

  }
  
  getUser(): Observable<User[]> {
    return this.http.get<User[]>('${apiUrl}/users/1');

 }
}
