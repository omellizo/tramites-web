import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user = new User();


  constructor(private router:Router, private userService:UserService){}

  ngOnInit(): void {
  }

  autenticar() {
    this.userService.authPerson(this.user).subscribe(data => {
      localStorage.setItem("user", data.username.toString());
      this.router.navigate(['survey-list']);
    });
    
  }
}
