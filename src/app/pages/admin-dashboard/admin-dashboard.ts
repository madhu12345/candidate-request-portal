import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboardComponent implements OnInit{
  private router = inject(Router);
  requests: any[] = [];

  ngOnInit(): void {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser')!);

    if (!loggedUser || loggedUser.role !== 'admin') {
      this.router.navigate(['/']);
      return;
    }

    this.loadRequests();
  }

  loadRequests() {
    this.requests = JSON.parse(localStorage.getItem('requests') || '[]');
  }

  resolveRequest(id: number) {

    const requests = JSON.parse(localStorage.getItem('requests') || '[]');

    const request = requests.find((r: any) => r.id === id);

    if (request) {
      request.status = 'Resolved';
      request.resolvedDate = new Date().toLocaleString();
    }

    localStorage.setItem('requests', JSON.stringify(requests));

    this.loadRequests();
  }

  logout() {
  localStorage.removeItem('loggedUser');
  this.router.navigate(['/']);
}

}
