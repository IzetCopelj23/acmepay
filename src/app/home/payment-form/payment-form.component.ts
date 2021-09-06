import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { AcmeService } from '../acme.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
  form: FormGroup;
  @Input() fields: any[] = [];
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private acmeService: AcmeService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('paymentDetails')) {
      this.fields = JSON.parse(sessionStorage.getItem('paymentDetails')).fields;
    }

    let tempFields: any = {};

    this.fields.forEach((x: any) => {
      tempFields[x.name] = ['', this.getValidations(x.validation)];
    });

    this.form = this.fb.group(tempFields);
  }

  getValidations(v: any[]): any[] {
    let toReturn: any[] = [];

    v.forEach((x: any) => {
      if (x.name === 'required') {
        toReturn.push(Validators.required);
      }

      if (x.name === 'minLength') {
        toReturn.push(Validators.minLength(x.value));
      }

      if (x.name === 'maxLength') {
        toReturn.push(Validators.maxLength(x.value));
      }
    });

    return toReturn;
  }

  submit() {
    debugger;
    if (!this.form.valid) {
    } else {
      this.formSubmitted.emit(this.form.getRawValue());
    }
  }
}
