import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {
onNoClick() {
throw new Error('Method not implemented.');
}

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {}

  allProfilePictures = ['profilePicture', 'profilePictureFemale', 'dog','lion','monkey','spyCat','tiger','wolf','cow']

}
