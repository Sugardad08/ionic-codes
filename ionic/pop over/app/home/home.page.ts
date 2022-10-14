import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  PlaySound(){
    let audio = new Audio();
    audio.src = "../assets/sound.mp3"
    audio.load();
    audio.play();

  }
  PlaySound2(){
    let audio = new Audio();
    audio.src = "../assets/sound2.mp3"
    audio.load();
    audio.play();

  }

}
