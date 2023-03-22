import { Component, inject, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { addDoc, collection, collectionData, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game !: Game;
  firestore: Firestore = inject(Firestore);
  item$!: Observable<any[]>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    const gamesCollection = collection(this.firestore, 'games');
    this.item$ = collectionData(gamesCollection);
    this.item$.subscribe((game) => {
      console.log('Game update', game);
    });
  }

  newGame() {
    this.game = new Game();
    let gamesColl = collection(this.firestore, 'games');
    addDoc(gamesColl, this.game.toJson());
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}