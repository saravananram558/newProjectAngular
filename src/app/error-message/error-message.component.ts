import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() data: any;
  @Input() dataName: string = "";
  @Input() minLength: number = 1;
  @Input() maxLength: number = 255;
}
