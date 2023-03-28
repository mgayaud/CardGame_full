import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardGameService {

  constructor(private http: HttpClient) {}

  getRandomSuits(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/random-suits").pipe(
      catchError(() => {
        alert("Le serveur ne répond pas");
        return [];
      })
    );
  }

  getRandomValues(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/random-values").pipe(
      catchError(() => {
        alert("Le serveur ne répond pas");
        return [];
      })
    );
  }

  getRandomHand(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/random-hand").pipe(
      catchError(() => {
        alert("Le serveur ne répond pas");
        return [];
      })
    );
  }

}