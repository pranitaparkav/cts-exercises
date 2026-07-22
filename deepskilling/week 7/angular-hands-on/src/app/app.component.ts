import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CTS Angular Component Hands-on';
  author = 'Rajakumaran P';

  products: Product[] = [
    { id: 1, name: 'Java FSE Handbook', category: 'Books', price: 499, available: true },
    { id: 2, name: 'Spring Boot Course Pass', category: 'Training', price: 1200, available: true },
    { id: 3, name: 'React 18 Dev Kit', category: 'Tools', price: 799, available: false },
    { id: 4, name: 'Cloud Architecture Pass', category: 'Training', price: 1500, available: true }
  ];

  selectedCategory = 'All';

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }
}
