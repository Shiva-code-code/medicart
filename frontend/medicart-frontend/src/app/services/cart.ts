import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    const existing = this.cartItems.find(p => p.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
  }

  removeItem(id: string) {
    this.cartItems = this.cartItems.filter(p => p.id !== id);
  }

  clearCart() {
    this.cartItems = [];
  }

  updateQuantity(id: string, qty: number) {
    const item = this.cartItems.find(p => p.id === id);
    if (item) {
      item.quantity = qty;
    }
  }
}
