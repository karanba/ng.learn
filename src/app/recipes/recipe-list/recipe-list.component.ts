import { Recipe } from './../recipe.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
    ),
    new Recipe('Krep',
    'This is a recipe',
    'https://cdn.pixabay.com/photo/2017/09/30/12/12/pancakes-2801959_1280.jpg'
  )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
