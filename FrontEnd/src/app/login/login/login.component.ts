import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageKeysEnum } from 'src/app/enum/localstorage-keys.enum';
import { RoleEnum } from 'src/app/enum/role.enum';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login: UserModel = {};

  constructor(private service : UserService,private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  seconnecter(){
    this.service.login(this.login).subscribe(userInfo=>{
      localStorage.setItem(LocalStorageKeysEnum.TOKEN, userInfo.accessToken);
      localStorage.setItem(LocalStorageKeysEnum.USER, JSON.stringify(userInfo.user));
      if(userInfo.user.role === RoleEnum.USER){
        this.router.navigateByUrl('/user/home')
      }else{
        this.router.navigateByUrl('/journalist/gerer-les-articles')
      }
      
    }, error => {
      this.toastr.error("Email ou mots de passe incorrect")
    })
  }
}
