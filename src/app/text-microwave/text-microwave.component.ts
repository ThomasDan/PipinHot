import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-text-microwave',
  templateUrl: './text-microwave.component.html',
  styleUrls: ['./text-microwave.component.css']
})
export class TextMicrowaveComponent implements OnInit {
  audio = new Audio('../../assets/sounds/microwave.mp3');
  textInput: string = '';
  result = '';

  program: string = 'Morse';
  programs: string[] = ['Morse', 'MD5'];
  microwaveStage = 'open';
  microwaveStages = new Map<string, string>([
    ['open','microwave_open.jpg'],
    ['closed','microwave_closed.jpg'],
    ['done','microwave_done.jpg']
  ]);
  microwaveImageFile = "url(../../assets/images/" + (this.microwaveStages.get(this.microwaveStage)) + ")";

  SetMicrowaveStage(stage: string){
    this.microwaveStage = stage;
    this.microwaveImageFile = "url(../../assets/images/" + (this.microwaveStages.get(this.microwaveStage)) + ")";
  }

  constructor() { }

  ngOnInit(): void {
    //console.log(this.microwaveStages.get('closed'));
    //let keys = this.microwaveStages.keys();
    //console.log(keys.next().value);
  }

  Start(){
    this.SetMicrowaveStage('closed');
    this.audio.playbackRate = 6;
    this.audio.play();
    setTimeout(() => {
      this.Done();
    }, 10000);
  }

  Done(){
    this.SetMicrowaveStage('done');
  }

  Reset(){
    this.SetMicrowaveStage('open');
  }

}
