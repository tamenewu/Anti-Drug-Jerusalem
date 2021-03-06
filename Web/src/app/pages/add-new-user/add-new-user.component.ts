import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../../service/manage-users/manage-user.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(private manageUsers:ManageUserService) {

   }

   public signIn(){
     var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
     this.manageUsers.signIn(email, password);
   };

  ngOnInit() {
  }

}
