import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldServiceService {
  constructor() {}

  // you can also call services inside Angular Elements
  sayHiBack(name: string) {
    return `✋🏿✋🏿✋🏿 Hi to you too ${name}`;
  }
}
