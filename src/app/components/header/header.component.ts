import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;

  isDarkMode: boolean;

  constructor(
    private themeService: ThemeService,
    private cartService: CartService
  ) {
    this.isDarkMode = this.themeService.isDarkMode();

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  ngOnInit(): void {}
}
