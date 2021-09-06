import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AcmeService } from './acme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  paymentDetails: any;
  isLoading = false;
  constructor(private acmeService: AcmeService, private route: Router) {}

  ngOnInit() {
    this.acmeService.getPaymentDetails().subscribe((r: any) => {
      this.paymentDetails = r;
      sessionStorage.setItem('paymentDetailsMain', JSON.stringify(this.paymentDetails));
      this.isLoading = false;
    });
  }
}
