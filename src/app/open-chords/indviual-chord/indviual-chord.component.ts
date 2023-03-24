import { Component , OnInit  , Input} from '@angular/core';
import { Chords } from 'src/app/chords.model';



@Component({
  selector: 'app-indviual-chord',
  templateUrl: './indviual-chord.component.html',
  styleUrls: ['./indviual-chord.component.css']
})
export class IndviualChordComponent implements OnInit {
  @Input() ochord : Chords ;
  @Input() index : number;

  ngOnInit(){
  }


}
