import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    role: ['candidate', Validators.required]
  });

  ngOnInit(): void {
    const users = localStorage.getItem('users');

    if (!users) {
      const defaultUsers = [
        {
          username: 'user',
          password: '1234',
          role: 'candidate'
        },
        {
          username: 'admin',
          password: 'admin123',
          role: 'admin'
        }
      ];

      localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
  }

  login() {

  if (this.loginForm.invalid) {
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const loginUser = users.find((user: any) =>
    user.username === this.loginForm.value.username &&
    user.password === this.loginForm.value.password &&
    user.role === this.loginForm.value.role
  );

  if (loginUser) {

    localStorage.setItem('loggedUser', JSON.stringify(loginUser));

    if (loginUser.role === 'candidate') {
      this.router.navigate(['/candidate']);
    } else {
      this.router.navigate(['/admin']);
    }

  } else {

    alert('Invalid Credentials');

  }

}
}
