import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Alle müssen gleichzeitig mit dem Trinken beginnen. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören zu trinken. Spieler 3 darf aufhören, sobald Spieler 2 aufhört zu trinken, und so weiter.' },
    { title: 'You', description: 'Du darfst eine Person bestimmen, die einen Schluck aus ihrem Getränk nimmt.' },
    { title: 'Me', description: 'Du musst einen Schluck trinken.' },
    { title: 'Chicks', description: 'Die Damen der Schöpfung müssen einen Schluck trinken.' },
    { title: 'Thumbmaster', description: 'Berühre mit deinem Daumen die Tischplatte. Der Mitspieler der zuletzt den Tisch berührt, muss einen Schluck trinken.' },
    { title: 'Men', description: 'Die Männer dürfen anstoßen und einen Schluck trinken.' },
    { title: 'Heaven', description: 'Hände hoch! Der letzte Spieler muss trinken!' },
    { title: 'Mate', description: 'Bestimme einen Mitspieler, der von nun an jedes Mal mit dir einen Schluck trinken muss, wenn du dazu aufgefordert wirst.' },
    { title: 'Rhymes', description: 'Der Kartenzieher sagt ein Wort und jeder Mitspieler muss einen Reim zu diesem Wort finden.Wer es vermasselt, muss saufen.' },
    { title: 'Category', description: 'Denk dir eine Kategorie aus (z. B. Farben). Jeder Spieler muss einen Gegenstand aus dieser Kategorie aufzählen.Wer nichts mehr weiß, muss trinken!' },
    { title: 'Rules', description: 'Eine Regel aufstellen. Der Spieler, der die Karte gezogen hat, stellt eine neue Regel auf (z.B. man darf das Wort "Ja" nicht sagen oder man darf sein Getränk nicht abstellen) und jeder, der diese Regel zu irgendeinem Zeitpunkt während des restlichen Spiels bricht, muss trinken.' },
    { title: 'Quizmaster', description: 'Du bist der Questionmaster, und wenn jemand eine von dir (dem Spieler, der die Karte gezogen hat) gestellte Frage beantwortet, muss er trinken. Dies gilt für JEDE Frage.' },
    { title: 'King', description: 'Der Spieler darf ein Getränk seiner Wahl in den Kingscup gießen. Wird der vierte König gezogen, so muss der Spieler unverzüglich den Kingscup in der Mitte des Spiels leeren.' },
  ];
  
  title = '';
  description = '';
  @Input() card!: string;

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
