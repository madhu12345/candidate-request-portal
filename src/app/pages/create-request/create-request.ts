import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-request.html',
  styleUrl: './create-request.css',
})
export class CreateRequestComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  requestForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  submitRequest() {

    if (this.requestForm.invalid) {
      return;
    }

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser')!);

    const requests = JSON.parse(localStorage.getItem('requests') || '[]');

    const request = {
      id: Date.now(),
      username: loggedUser.username,
      title: this.requestForm.value.title,
      description: this.requestForm.value.description,
      status: 'Pending',
      createdDate: new Date().toLocaleString()
    };

    requests.push(request);

    localStorage.setItem('requests', JSON.stringify(requests));

    alert('Request submitted successfully.');

    this.requestForm.reset();

    this.router.navigate(['/my-requests']);
  }


}
