import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  
  countCapital(str: string): number{
    return (str.match(/[A-Z]/g) || []).length;
  }
}
