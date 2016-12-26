import { Component } from '@angular/core';
import {PhraseService} from'../../services/phrase.service';
import {Phrase} from '../../../Phrase';

@Component({
  moduleId: module.id,
  selector: 'phrase',
  providers: [PhraseService],
  templateUrl: `phrase.component.html`,
})
export class PhraseComponent {

  engVersion: string;
  plVersion: string;
  description: string;

  newPhrase: Phrase;


  phrases: Phrase[];

  constructor(private phraseService: PhraseService) {
this.getPhrases()
  };


  getPhrases() {
    console.log(this.phraseService.getPhrases());
  }



  addPhrase(event) {
    console.log(event);

    //  event.PreventDefault();
    this.newPhrase.engVersion = "eng";
    this.newPhrase.plVersion = "pl";
    /*this.phraseService.addPhrase(newPhrase).subscribe(phrase => {
      alert(phrase);
      this.phrases.push(phrase);
    });*/
    this.phraseService.addPhrase(this.newPhrase);
    this.phrases.push(this.newPhrase);
  }

}
