import { Component , OnInit } from '@angular/core';
import { OpenChordService} from './open-chord-service.service';
import { Chords } from '../chords.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-open-chords',
  templateUrl: './open-chords.component.html',
  styleUrls: ['./open-chords.component.css']
})
export class OpenChordsComponent implements OnInit {
  openChords : Chords [];
  index : number;
  deleteCount : number = 6;
  chord_count : number =  6;
  constructor(private chords : OpenChordService,
    private router : Router){}

  ngOnInit(){
    this.openChords = this.chords.getChords();
  }

  deleteChord(index : number){
    this.deleteCount--;
    this.chord_count--;
    this.openChords = this.openChords.splice(index , this.deleteCount);
    this.router.navigate(['/open-chords']);
  }

}
