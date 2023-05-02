import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users/1'
    );
  }
  createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(
      'https://jsonplaceholder.typicode.com/users',
      user
    );
  }

  //Sending Update Request
  updateUser(user: User): Observable<User[]> {
    return this.http.put<User[]>(
      'https://jsonplaceholder.typicode.com/users/${user.id}',
      user
    );
  }
  // Sending Patch Requst
  patchUser(user: User): Observable<User[]> {
    return this.http.patch<User[]>(
      'https://jsonplaceholder.typicode.com/users/${user.id}',
      user
    );
  }
  // Sending Delete Requst
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(
      'https://jsonplaceholder.typicode.com/users/${user.id}'
    );
  }
}
