import { Component } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';


@Component({
  selector: 'app-joining-form',
  templateUrl: './joining-form.component.html',
  styleUrls: ['./joining-form.component.css']
})
export class JoiningFormComponent {
  signupForm : FormGroup;
  genders = ['male' , 'female'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'password' : new FormControl(null),
      'gender': new FormControl('male')
    });
  }
}
