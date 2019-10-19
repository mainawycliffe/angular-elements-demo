import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HelloWorldServiceService as HelloWorldService } from '../hello-world-service.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input()
  name;

  @Output()
  sayHelloBack = new EventEmitter<string>();

  constructor(private service: HelloWorldService) {}

  ngOnInit() {}

  onSayHelloBack() {
    this.sayHelloBack.emit(this.service.sayHiBack(this.name));
  }
}
