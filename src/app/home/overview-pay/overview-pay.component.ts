import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcmeService } from '../acme.service';

@Component({
  selector: 'app-overview-pay',
  templateUrl: './overview-pay.component.html',
  styleUrls: ['./overview-pay.component.scss'],
})
export class OverviewPayComponent implements OnInit {
  isLoading = false;
  paymentDetails: any;

  constructor(private acmeService: AcmeService, private route: Router) {}

  ngOnInit() {
    this.isLoading = true;
    if (sessionStorage.getItem('paymentDetailsMain')) {
      this.paymentDetails = JSON.parse(sessionStorage.getItem('paymentDetailsMain'));
    }
  }

  onMethodSelection(link: any) {
    this.acmeService.getPaymentDetailsByMethod(link).subscribe((r: any) => {
      sessionStorage.setItem('paymentDetails', JSON.stringify(r[0]));
      this.route.navigate([`/acme/${link}`]);
    });
  }
}
