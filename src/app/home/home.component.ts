import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name!: string; // Define the name property
  email!: string; // Define the email property

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value); // Handle form submission logic
    }
  }
}
