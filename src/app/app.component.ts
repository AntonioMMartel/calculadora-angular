import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'POPEYE EL MATEMATICO';
  calc = '0';
  eval = '0';
  marilolaState = 0; // MUSICOTE

  clear(): void {
    this.calc = '0';
    this.eval = '0';
  }

  pressKey(key: string): void {
    if (this.calc === '0') this.calc = '';
    this.calc += key;
  }

  pressSign(key: string): void {
    if (this.calc !== '') {
      if (this.calc === '0') this.calc += key;
      let lastKey = this.calc[this.calc.length - 1];
      if (
        lastKey === '/' ||
        lastKey === '*' ||
        lastKey === '+' ||
        lastKey === '-' ||
        lastKey === '.'
      ) {
        let _calc = this.calc.slice(0, -1) + key;
        this.calc = _calc;
        return;
      }
    }
    if (this.calc === '0') this.calc = '';
    this.calc += key;
  }
  evaluate(): void {
    let lastKey = this.calc[this.calc.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '+' ||
      lastKey === '-' ||
      lastKey === '.'
    )
      return;
    if (eval(this.eval) === this.calc) return;
    if (this.calc.includes('.')) {
      let _calc = this.calc
        .replace('+', 'm')
        .replace('-', 'm')
        .replace('/', 'm')
        .replace('*', 'm')
        .split('m');
      for (var x of _calc) {
        if (x.indexOf('.') != x.lastIndexOf('.')) return;
      }
    }
    if (
      this.calc.includes('+') ||
      this.calc.includes('-') ||
      this.calc.includes('/') ||
      this.calc.includes('*')
    ) {
      this.eval = this.calc;
      this.calc = eval(this.calc);
    }
  }

  toggleMUSICOTE(image: any): void {
    if (this.marilolaState == 0) {
      document.getElementsByTagName('audio')[0].play();
      this.marilolaState++;
      image.src = '../assets/MarilolaEnjoyingPopeyeTheme.png';
    } else {
      document.getElementsByTagName('audio')[0].pause();
      this.marilolaState--;
      image.src = '../assets/MarilolaNotEnjoyingPopeyeTheme.png';
    }
  }
}
