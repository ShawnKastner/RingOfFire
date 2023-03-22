import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  
  constructor(private router: Router, private firestore: Firestore) { }

  newGame() {
    // Start game
    let game = new Game();
    let gamesColl = collection(this.firestore, 'games');
    addDoc(gamesColl, game.toJson())
    .then((gameInfo: any) => {
      console.log();
      this.router.navigateByUrl('/game/' + gameInfo.id);
    })
  }
}