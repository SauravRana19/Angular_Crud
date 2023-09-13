import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  filter,
  map,
  of,
  throwError,
  Subject,
} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  usersUrl: string = 'https://63d0dd9dd5f0fa7fbdbee84f.mockapi.io/users';

  apigetdata = new Subject();

  constructor(public http: HttpClient) {}

  getUsers(): Observable<string[]> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      catchError((error) => {
        return throwError(() => console.log(error.error));
      })
    );
  }
  addUser(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.usersUrl, data).pipe(
      catchError((error) => {
        return throwError(() => console.log(error.error));
      })
    );
  }
  deleteUser(id: number): Observable<any[]> {
    return this.http.delete<any[]>(this.usersUrl + '/' + id).pipe(
      catchError((error) => {
        return throwError(() => console.log(error.error));
      })
    );
  }
  updateUser(data: any): Observable<any[]> {
    return this.http.put<any[]>(this.usersUrl + '/' + data.id, data).pipe(
      catchError((error) => {
        return throwError(() => console.log(error.error));
      })
    );
  }
  searchUser(eventdata: any, value: any) {
    // console.log('data', eventdata, value);
    // console.log('value', value);
    return of(
      eventdata.filter((items: any) => {
        return JSON.stringify(items.FirstName)
          .toLocaleLowerCase()
          .includes(value);
      })
    );
  }
  
}
