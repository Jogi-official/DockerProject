import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarreChordsComponent } from './barre-chords/barre-chords.component';
import { OpenChordsComponent } from './open-chords/open-chords.component';
import { HomeComponent } from './home/home.component';
import { OpenChordDescriptionComponent } from './open-chords/open-chord-description/open-chord-description.component';
import { JoiningFormComponent } from './joining-form/joining-form.component';

const routes: Routes = [
  {path : '' , redirectTo : '/home' , pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'open-chords' , component : OpenChordsComponent , children : [
    {path : ":id" , component : OpenChordDescriptionComponent}
  ]},
  {path : 'barre-chords' , component : BarreChordsComponent},
  {path : 'joining-form' , component : JoiningFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
