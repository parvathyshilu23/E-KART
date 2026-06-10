import { ChangeDetectorRef, Component } from '@angular/core';
import { Productcard } from '../productcard/productcard';
import { Api } from '../api';

@Component({
  selector: 'app-products',
  imports: [Productcard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any;
  constructor(private api: Api, private cdr: ChangeDetectorRef) { }

   ngOnInit(){
      this.api.getallproducts().subscribe((res: any) => {
          this.products = res;
          this.cdr.detectChanges()
      })
   }
}
