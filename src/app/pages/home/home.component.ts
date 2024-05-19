import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sound!: Howl;
  showContainer: boolean = false

  constructor() { 
    this.sound = new Howl({
      src: ['../../../assets/sounds/17151-video_game_3.wav']
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showContainer = true;
    }, 1500);
  }

  onMouseOverOption() {
    this.sound.play();
  }

}
