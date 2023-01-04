import { Component, OnInit } from '@angular/core';

import { logo } from './enum/logo.enum';
import { Square } from './model/box.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor() {}

  boardBoxes: Square[][] = [
    [
      { class: 'empty', text: ' ' },
      { class: 'empty', text: ' ' },
      { class: 'empty', text: ' ' },
      { class: 'empty', text: ' ' },
      { class: 'empty', text: ' ' },
      { class: 'empty', text: ' ' },
      { class: 'result', text: 'result' },
    ],
    [
      { class: 'empty', text: ' ' },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'special', icon: undefined },
      { class: 'result', text: undefined },
    ],
    [
      { class: 'empty', text: ' ' },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'special', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'result', text: 'result' },
    ],
    [
      { class: 'empty', text: ' ' },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'special', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'result', text: 'result' },
    ],
    [
      { class: 'empty', text: ' ' },
      { class: 'box', icon: undefined },
      { class: 'special', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'result', text: 'result' },
    ],
    [
      { class: 'empty', text: ' ' },
      { class: 'special', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'box', icon: undefined },
      { class: 'result', text: 'result' },
    ],
    [
      { class: 'result', text: 'result' },
      { class: 'result', text: 'result' },
      { class: 'result', text: 'result' },
      { class: 'result', text: 'result' },
      { class: 'result', text: 'result' },
      { class: 'result', text: 'result' },
      { class: 'result', text: 'result' },
    ],
  ];

  ngOnInit(): void {}

  addIcon(row: number, line: number): void {
    const enumValues = Object.values(logo);
    console.log(enumValues);

    const randomNumber = Math.floor(Math.random() * (5 + 1));
    const randomIcon = logo[randomNumber];
    console.log(randomIcon);
    this.boardBoxes[row][line].icon = randomIcon;
  }
}
