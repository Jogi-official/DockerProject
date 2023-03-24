import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OpenChordsComponent } from './open-chords/open-chords.component';
import { BarreChordsComponent } from './barre-chords/barre-chords.component';
import { OpenChordService } from './open-chords/open-chord-service.service';
import { IndviualChordComponent } from './open-chords/indviual-chord/indviual-chord.component';
import { OpenChordDescriptionComponent } from './open-chords/open-chord-description/open-chord-description.component';
import { JoiningFormComponent } from './joining-form/joining-form.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OpenChordsComponent,
    BarreChordsComponent,
    HomeComponent,
    IndviualChordComponent,
    OpenChordDescriptionComponent,
    JoiningFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [OpenChordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
