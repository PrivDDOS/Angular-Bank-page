import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  request = {
    name: '',
    email: '',
    message: ''
  };

  status = '';

  constructor(private http: HttpClient) {}

  submitForm(form: NgForm) {
    if (!this.request.name || !this.request.email || !this.request.message) {
      this.status = 'Please fill in all fields.';
      return;
    }

    // POST name, email, message to the MongoDB(Backend)
    this.http.post('http://localhost:5000/api/v1/request/createRequest', this.request)
      .subscribe({
        next: () => {
          this.status = 'Request sent successfully.';
          this.request = { name: '', email: '', message: '' };
          form.resetForm();
        },
        error: (error) => {
          this.status = error.error?.message || 'Submit failed. Please try again.';
        }
      });
  }
}
