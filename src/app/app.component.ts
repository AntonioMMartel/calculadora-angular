import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio con Texto';
  text1="1";
  text2="2";
  num1=0;
  num2=0;
  result="X";

  concatenate():void{
    this.result=this.text1+this.text2;
  }
  upper():void{
    this.result=this.text1.toUpperCase();
  }
  lower():void{
    this.result=this.text1.toLowerCase();
  }
  find():void{
    this.result=(this.text1.indexOf(this.text2)).toString();
  }
  slice():void{
    this.result=this.text1.slice(this.num1,this.num2);
  }
  length():void{
    this.result=(this.text1.length).toString();
  }
  include():void{
    this.result=String(this.text1.includes(this.text2));
  }
  split():void{
    this.result=((this.text1).split('this.text2')).toString();
  }
}
