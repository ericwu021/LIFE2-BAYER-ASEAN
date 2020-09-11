import { Component } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life2';
  sound = new Howl(
            {src: ["assets/Easy-Breeze.mp3"],
             loop: true,
             volume: 1});

  bgmplay(){

   this.sound.playing() ? this.sound.pause() : this.sound.play();

  }

}
