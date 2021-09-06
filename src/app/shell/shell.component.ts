import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcmeService } from '@app/home/acme.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  isLoading = false;
  paymentDetails: any;

  constructor(private acmeService: AcmeService, private route: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.acmeService.getPaymentDetails().subscribe((r: any) => {
      this.paymentDetails = r;
      this.isLoading = false;
    });
  }
}
