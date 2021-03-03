import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeysEnum } from 'src/app/enum/localstorage-keys.enum';
import { RoleEnum } from 'src/app/enum/role.enum';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: UserModel;

  roleEnum = RoleEnum;

  //constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {


    this.user = this.userService.getConnectedUser();
  }

  signout(): void {
    localStorage.removeItem(LocalStorageKeysEnum.USER);
    localStorage.removeItem(LocalStorageKeysEnum.TOKEN);
    this.user = this.userService.getConnectedUser();
    this.router.navigateByUrl('/user/home')

  }

}

