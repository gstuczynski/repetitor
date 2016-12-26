import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhraseService{
  constructor(private http: Http){
      console.log("PhraseService Initialized")
  }

  getPhrases(){
    return this.http.get('http://localhost:3000/phrase')
            .map(res => res.json());
  }
  addPhrase(newPhrase){
    console.log(newPhrase);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/phrase', JSON.stringify(newPhrase), {headers: headers})
    .map(res=>res.json());
  }



}
