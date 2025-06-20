import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  cartItems = [
    { id: '1', name: 'Pain Relief Tablets', image: 'fepanil-120.png', quantity: 2, price: 45 },
    { id: '2', name: 'Cough Syrup', image: 'Mu.png', quantity: 1, price: 65 },
    { id: '3', name: 'Vitamin D Supplement', image: 'cyclopam.png', quantity: 3, price: 80 }
  ];

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  checkout() {
    alert('Proceeding to checkout!');
  }
}
