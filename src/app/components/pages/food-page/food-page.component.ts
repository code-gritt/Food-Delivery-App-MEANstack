import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(
    activatedRoute: ActivatedRoute,
    http: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.food = http.getFoodById(params.id);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {}
}
