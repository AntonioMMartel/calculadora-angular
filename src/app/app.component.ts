import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POPEYE EL MATEMATICO';
  calc = '0'
  eval = '0'

  clear():void {
    this.calc = '0'
    this.eval = '0'
  }

  pressKey(key: string): void {
  }

  pressSign(key: string): void {
  }
  
  evaluate(): void {
    
  }
}