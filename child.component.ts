import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  isPrime: boolean;
  capitalCount: number

  constructor(private numberService: NumberService,private stringService: StringService){

  const numberToCheck = 13;
  const stringWithCapitals ='Hello World';

  this.isPrime = this.numberService.chkPrime(numberToCheck);
  this.capitalCount = this.stringService.countCapital(stringWithCapitals);
  }
}
