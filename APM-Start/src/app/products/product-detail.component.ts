import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct | undefined ;
  productId: number=0;
  _productSercvice: ProductService;

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router) {
    this._productSercvice = productService;
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`  
    this.productId = Number(id);

    this._productSercvice.getProductById(this.productId).subscribe(
      x=> this.product = x
    );

    console.log(this.productId);

  }

  onBack(): void{
    this.router.navigate(["./products"]);
  }
}
