import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sound!: Howl;

  constructor() { 
    this.sound = new Howl({
      src: ['../../../assets/sounds/17151-video_game_3.wav']
    });
  }

  ngOnInit(): void {
  }

  onMouseOverOption() {
    this.sound.play();
  }

}
