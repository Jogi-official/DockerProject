import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router , Params } from '@angular/router';
import { Chords } from 'src/app/chords.model';
import { OpenChordService } from '../open-chord-service.service';

@Component({
  selector: 'app-open-chord-description',
  templateUrl: './open-chord-description.component.html',
  styleUrls: ['./open-chord-description.component.css']
})
export class OpenChordDescriptionComponent implements OnInit{
  chords : Chords;
  id : number;

  constructor(private openChordService: OpenChordService,
      private route : ActivatedRoute ,
      private router : Router
      ){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params : Params) =>{
        this.id = +params['id'];
        this.chords = this.openChordService.getChord(this.id);
      }
    )
  }
}
