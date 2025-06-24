import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  getNames(): Observable<string[]> {
    let names = ['Anil', 'Kapil', 'Sneha', 'Pooja', 'Anjali',];
    return new Observable((observer) => {
      observer.next(names);     
      observer.complete();      
    });
  }
}
