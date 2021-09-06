import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcmeService } from '../acme.service';

@Component({
  selector: 'app-visa-pay',
  templateUrl: './visa-pay.component.html',
  styleUrls: ['./visa-pay.component.scss'],
})
export class VisaPayComponent implements OnInit {
  fields: any[] = [];
  constructor(private acmeService: AcmeService, private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('paymentDetails')) {
      this.fields = JSON.parse(sessionStorage.getItem('paymentDetails')).fields;
    }
  }

  submitForm(data: any) {
    this.acmeService.postPayment({ id: this.acmeService.getId(), name: 'Visa', data: data }).subscribe((res: any) => {
      console.log('SamerLogPost', res);
      this.router.navigate(['/acme/success']);
    });
  }
}
