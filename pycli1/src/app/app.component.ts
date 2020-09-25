import { Component } from '@angular/core';

declare const movetoNext:any;
declare const movetoprevious:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ang9project';


  onkeyup(){
    movetoNext();
    movetoprevious();
  }


}

