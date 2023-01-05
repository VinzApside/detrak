import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
})
export class DicesComponent implements OnInit {
  @ViewChild('dice') elRef!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  public rollDice() {
    const dices = this.elRef.nativeElement.querySelectorAll(
      '.die-list'
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < dices.length; i++) {
      const dice = dices[i];
      this.toggleClasses(dice);
      dice.dataset['roll'] = `${this.getRandomNumber(1, 6)}`;
    }
  }

  private toggleClasses(dice: HTMLElement) {
    dice.classList.toggle('odd-roll');
    dice.classList.toggle('even-roll');
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
