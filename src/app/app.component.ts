import { Component } from '@angular/core';
import { Information } from './models/app.models.information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title :string;
  informations :[Information];

  constructor() {
    this.title = 'New Adrian Title';
    this.informations = 
    [
     new Information("Une nouvelle bien fraiche"),
     new Information("Tout est permis.")
      ];
  }

  addInformation(newInformation: string) {
    if (newInformation) {
      this.informations.push(new Information(newInformation));
    }
  }
}
