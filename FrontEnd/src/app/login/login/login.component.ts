import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageKeysEnum} from 'src/app/enum/localstorage-keys.enum';
import {RoleEnum} from 'src/app/enum/role.enum';
import {UserModel} from 'src/app/models/user.model';
import {UserService} from 'src/app/services/user.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login: UserModel = {};
    hide = false;
    signupForm: FormGroup;
  selectedTab = 0;

    constructor(private service: UserService,
                private router: Router,
                private toastr: ToastrService,
                private fb: FormBuilder,
                private registerservice: UserService) {
    }

    ngOnInit(): void {
        this.initSignupForm();
    }

    confirmer(): void {
        if (this.signupForm.invalid) {
            Object.keys(this.signupForm.controls).forEach(controlName =>
                this.signupForm.controls[controlName].markAsTouched()
            );
            return;
        }

        const signup = this.signupForm.value;
        signup.role = RoleEnum.USER;
        this.registerservice.register(signup).subscribe((res) => {
            this.selectedTab = 0;
            this.toastr.success('Votre compte a bien été crée');
        });
    }

    seconnecter(): void {
        this.service.login(this.login).subscribe(userInfo => {
            localStorage.setItem(LocalStorageKeysEnum.TOKEN, userInfo.accessToken);
            localStorage.setItem(LocalStorageKeysEnum.USER, JSON.stringify(userInfo.user));
            if (userInfo.user.role === RoleEnum.USER) {
                this.router.navigateByUrl('/user/home');
            } else {
                this.router.navigateByUrl('/journalist/gerer-les-articles');
            }

        }, error => {
            this.toastr.error('Email ou mots de passe incorrect');
        });
    }

    isControlHasError(controlName: string, validationType: string): boolean {
        const control = this.signupForm.controls[controlName];
        if (!control) {
            return false;
        }

        return control.hasError(validationType) && (control.dirty || control.touched);
    }

    private initSignupForm() {
        this.signupForm = this.fb.group({
            lastName: ['', Validators.required],
            firstName: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        }, {
            validator: ConfirmPasswordValidator.MatchPassword
        });
    }

}

class ConfirmPasswordValidator {
    /**
     * Check matching password with confirm password
     * @param control AbstractControl
     */
    static MatchPassword(control: AbstractControl) {
        const password = control.get('password').value;

        const confirmPassword = control.get('confirmPassword').value;

        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ConfirmPassword: true});
        } else {
            return null;
        }
    }
}

