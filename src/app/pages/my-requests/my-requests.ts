import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-requests.html',
  styleUrl: './my-requests.css',
})
export class MyRequestsComponent implements OnInit {

  private router = inject(Router);

  requests: any[] = [];

  ngOnInit(): void {

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser')!);

    if (!loggedUser) {
      this.router.navigate(['/']);
      return;
    }

    const allRequests = JSON.parse(localStorage.getItem('requests') || '[]');

    this.requests = allRequests.filter(
      (request: any) => request.username === loggedUser.username
    );
  }

  back() {
    this.router.navigate(['/candidate']);
  }

}
