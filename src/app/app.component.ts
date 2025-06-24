import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  promise: string = '';
  // observable: string[] = [];
  nameList: string[] = [];

  constructor(private nameService: NameService) {}

  ngOnInit() {
    this.runPromise();
    // this.runObservable();

    this.nameService.getNames().subscribe({
      next: (data) => {
        this.nameList = data;
        console.log('Received names:', this.nameList);
      },
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Name Observable completed'),
    });
  }

  // Promise
  runPromise() {
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        let success = true;
        let result = 'Data fetched successfully!';
        let error = 'Something went wrong!';

        if (success) {
          resolve(result);
        } else {
          reject(error);
        }
      }, 5000);
    });
    promise
      .then((data) => {
        console.log('Promise resolved:', data);
      })
      .catch((error) => {
        console.error('Promise rejected:', error);
      });
  }

  //Observable
  // runObservable() {
  //   const observable = new Observable<string>((observer) => {
  //     observer.next('First value from Observable');
  //     observer.next('Second value from Observable');
  //     setTimeout(() => {
  //       observer.next('Third value after 5 seconds');
  //       observer.complete();
  //     }, 5000);
  //   });
  //   observable.subscribe({
  //     next: (value) => { console.log(value);},
  //     error: (err) => { console.error(err); },
  //     complete: () => { console.log('Observable completed');},
  //   });
  // }
  
}
