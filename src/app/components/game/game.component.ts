import { Component, OnInit } from '@angular/core';
import Game from 'game-2048';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [PagesService]
})
export class GameComponent implements OnInit {
  constructor(private page: PagesService) {}

  ngOnInit(): void {
    const game = new Game({
      gameContainer: document.getElementById('game-container'),
      title: '',
      desc: ''
    });
  }
}
