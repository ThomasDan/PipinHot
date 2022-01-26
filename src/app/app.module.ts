import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextMicrowaveComponent } from './text-microwave/text-microwave.component';
import { MorseSmokePipe } from './text-microwave/pipe-programs/morse-smoke.pipe';
import { Md5SmokePipe } from './text-microwave/pipe-programs/md5-smoke.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextMicrowaveComponent,
    MorseSmokePipe,
    Md5SmokePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
