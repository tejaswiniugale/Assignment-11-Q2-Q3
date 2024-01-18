import { Component } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  isPrime: boolean;

  constructor(private numberService: NumberService){

    const numberToCheck =13;
    this.isPrime =this.numberService.chkPrime(numberToCheck);
  }

}
