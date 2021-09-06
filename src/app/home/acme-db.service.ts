import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { httpClientInMemBackendServiceFactory, InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class AcmeDbService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let paymentDetails = {
      paymentAmount: 100.0,
      currency: 'USD',
      listOfPaymentMethods: [
        { name: 'Sepa', link: 'sepa' },
        { name: 'Visa', link: 'visa' },
      ],
    };
    let paymentMethods = [
      {
        name: 'Sepa',
        link: 'sepa',
        fields: [
          {
            name: 'IBAN',
            label: 'IBAN',
            type: 'text',
            validation: [{ name: 'required' }, { name: 'minLength', value: 15 }, { name: 'maxLength', value: 32 }],
          },
          {
            name: 'BIC',
            label: 'BIC',
            type: 'text',
            validation: [{ name: 'required' }, { name: 'minLength', value: 8 }, { name: 'maxLength', value: 8 }],
          },
          {
            name: 'Holder name',
            label: 'Holder name',
            type: 'text',
            validation: [{ name: 'required' }, { name: 'minLength', value: 15 }, { name: 'maxLength', value: 50 }],
          },
        ],
      },
      {
        name: 'Visa',
        link: 'visa',
        fields: [
          {
            name: 'Card holder',
            label: 'Card holder',
            type: 'text',
            validation: [{ name: 'required' }, { name: 'minLength', value: 15 }],
          },
          {
            name: 'Card number',
            label: 'Card number',
            type: 'text',
            validation: [{ name: 'required' }, { name: 'minLength', value: 15 }],
          },
          {
            name: 'Exp date',
            label: 'Exp date',
            type: 'text',
            validation: [{ name: 'required' }, { name: 'minLength', value: 10 }, { name: 'maxLength', value: 10 }],
          },
          {
            name: 'CVC',
            label: 'CVC',
            type: 'text',
            validation: [{ name: 'required' }, { name: 'minLength', value: 3 }, { name: 'maxLength', value: 3 }],
          },
        ],
      },
    ];

    let payments: any[] = [];

    return { paymentDetails, paymentMethods, payments };
  }
}
