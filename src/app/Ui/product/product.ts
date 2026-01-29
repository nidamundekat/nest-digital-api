import { Component } from '@angular/core';
import { Apiservice } from '../apiservice/apiservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products:any[]=[];
 constructor(private apiservice:Apiservice){}


 ngOnInit()
 {
          this.apiservice.getProduct().subscribe((data:any)=>{
            this.products=data;
          });
 }


}
