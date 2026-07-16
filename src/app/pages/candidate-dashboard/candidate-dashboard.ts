import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard',
  imports: [RouterLink],
  templateUrl: './candidate-dashboard.html',
  styleUrl: './candidate-dashboard.css',
})
export class CandidateDashboardComponent implements OnInit{

  private router = inject(Router);

  ngOnInit(): void {
    const loggedUser = localStorage.getItem('loggedUser');

    if (!loggedUser) {
      this.router.navigate(['/']);
    }
  }

logout() {
  localStorage.removeItem('loggedUser');
  this.router.navigate(['/']);
}

}
