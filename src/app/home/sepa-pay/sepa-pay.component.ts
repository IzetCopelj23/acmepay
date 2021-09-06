import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcmeService } from '../acme.service';

@Component({
  selector: 'app-sepa-pay',
  templateUrl: './sepa-pay.component.html',
  styleUrls: ['./sepa-pay.component.scss'],
})
export class SepaPayComponent implements OnInit {
  fields: any[] = [];
  constructor(private acmeService: AcmeService, private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('paymentDetails')) {
      this.fields = JSON.parse(sessionStorage.getItem('paymentDetails')).fields;
    }
  }

  submitForm(data: any) {
    this.acmeService.postPayment({ id: this.acmeService.getId(), name: 'Sepa', data: data }).subscribe((res: any) => {
      console.log('SamerLogPost', res);
      this.router.navigate(['/acme/success']);
    });
  }
}
