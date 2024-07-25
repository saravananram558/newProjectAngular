import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicingService } from '../servicing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private service:ServicingService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.service.submitForm(this.myForm.value).subscribe((res: any) => {
        if (res.success) {
          console.log('Form submitted successfully!');
        } else {
          console.log('Form submission failed.');
        }
      }, (error: any) => {
        console.error('Error submitting form:', error);
      });
    } else {
      console.log('Form is invalid');
      this.myForm.markAllAsTouched()
    }
  }

  get formData() {
    return this.myForm.controls;
  }
}
