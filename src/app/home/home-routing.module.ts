import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { SepaPayComponent } from './sepa-pay/sepa-pay.component';
import { VisaPayComponent } from './visa-pay/visa-pay.component';
import { OverviewPayComponent } from './overview-pay/overview-pay.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const childRoutes: Routes = [
  { path: '', redirectTo: '/acme/overview-pay', pathMatch: 'full' },
  { path: 'acme/overview-pay', component: OverviewPayComponent, data: { title: marker('Overview') } },
  { path: 'acme/sepa', component: SepaPayComponent, data: { title: marker('Sepa') } },
  { path: 'acme/visa', component: VisaPayComponent, data: { title: marker('Visa') } },
  { path: 'acme/success', component: PaymentSuccessComponent, data: { title: marker('Success') } },
];

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: HomeComponent,
      children: childRoutes,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
