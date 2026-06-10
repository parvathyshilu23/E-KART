import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlepage',
  imports: [],
  templateUrl: './singlepage.html',
  styleUrl: './singlepage.css',
})
export class Singlepage {
  singleData: any;
  productid: any;

  constructor(private api: Api, private cdr: ChangeDetectorRef, private ar: ActivatedRoute) {}
    
    ngOnInit(){
      this.productid = this.ar.snapshot.params['id'];
      this.api.getsingleproduct(this.productid).subscribe((res: any) => {
        this.singleData = res;
        this.cdr.detectChanges()
      })
    }
}
