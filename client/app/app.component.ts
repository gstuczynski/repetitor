import { Component } from '@angular/core';
import { PhraseService } from './services/phrase.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[PhraseService]
})
export class AppComponent  { name = 'Angular'; }
