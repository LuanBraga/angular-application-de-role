import { RelativeTimePipe } from './pipes/pipe-test/relative-time.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeTestComponent } from './pipes/pipe-test/pipe-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeTestComponent,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
