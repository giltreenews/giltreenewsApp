import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleEnum } from 'src/app/enum/role.enum';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  login: UserModel = {};
  constructor(private registerservice: UserService,
     private router: Router,
     private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  confirmer() {
    this.login.role = RoleEnum.USER;
    this.registerservice.register(this.login).subscribe((res) => {
      this.router.navigateByUrl('/login');
      this.toastr.success('Votre compte a bien été crée')
    })


  }

}
