import { Component } from '@angular/core';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
capitalCount: number;

constructor(private stringService: StringService){
  const stringWithCapitals ='Hello World';
  this.capitalCount = this.stringService.countCapital(stringWithCapitals);
}

}
