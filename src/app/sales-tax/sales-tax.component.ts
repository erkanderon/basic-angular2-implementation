import { Component }       from '@angular/core';

import { SalesTaxService } from '../services/sales-tax.service';
import { TaxRateService }  from '../services/tax-rate.service';


@Component({
  selector:    'sales-tax',
  templateUrl: './sales-tax.component.html',
  providers: [SalesTaxService, TaxRateService]
})
export class SalesTaxComponent {
  constructor(private salesTaxService: SalesTaxService) { }

  getTax(value: string | number) {
    return this.salesTaxService.getVAT(value);
  }
}