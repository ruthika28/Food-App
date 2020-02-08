import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormElegantEmail: new FormControl('', Validators.email),
      modalFormElegantPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormElegantEmail() {
    return this.validatingForm.get('modalFormElegantEmail');
  }

  get modalFormElegantPassword() {
    return this.validatingForm.get('modalFormElegantPassword');
  }
}