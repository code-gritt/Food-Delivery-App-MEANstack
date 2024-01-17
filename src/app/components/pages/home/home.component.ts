import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private http: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.http.getAllFoodBySearchTerm(params.searchTerm);
      else this.foods = http.getAll();
    });
  }
  ngOnInit(): void {}
}
