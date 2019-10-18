import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input()
  someProp;

  @Output()
  sayHelloBack = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSayHelloBack() {
    this.sayHelloBack.emit('Hi to you too!');
  }
}
