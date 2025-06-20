import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./item-details.css'],
  standalone: true,
})
export class ItemDetails implements OnInit {
  productId!: string;
  product: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService // ✅ Injected correctly
  ) {}

  addToCart() {
    if (this.product) {
      this.cartService.addToCart({ ...this.product, quantity: this.quantity });
      alert(`${this.quantity} item(s) added to cart!`);
    }
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.productService.getProductById(this.productId).subscribe((data: any) => {
      this.product = data;
    });
  }
}
