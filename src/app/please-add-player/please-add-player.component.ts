import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-please-add-player',
  templateUrl: './please-add-player.component.html',
  styleUrls: ['./please-add-player.component.scss']
})
export class PleaseAddPlayerComponent {

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }

}
