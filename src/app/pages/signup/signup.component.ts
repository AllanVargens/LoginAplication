import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service.service';
import { ToastrService } from 'ngx-toastr';

interface SingUpForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [DefaultLayoutComponent, ReactiveFormsModule, PrimaryInputComponent],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignUpComponent {
  singupForm!: FormGroup<SingUpForm>;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.singupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService
      .signup(
        this.singupForm.value.name,
        this.singupForm.value.email,
        this.singupForm.value.password
      )
      .subscribe({
        next: () => this.toastr.success('Login feito com sucesso!'),
        error: () =>
          this.toastr.error('Erro Inesperado! Tente novamente mais tarde!'),
      });
  }
  navigate() {
    this.router.navigate(['/login']);
  }
}
