import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AcmeService {
  constructor(private http: HttpClient) {}

  getPaymentDetails() {
    return this.http.get('/paymentDetails');
  }

  getPaymentDetailsByMethod(method: string) {
    return this.http.get(`/paymentMethods/?name=${method}`);
  }

  postPayment(data: any) {
    return this.http.post(`/payments`, data);
  }

  getPayments() {
    return this.http.get(`/payments`);
  }

  getId(): number {
    return new Date().getTime();
  }
}
