import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  name = 'Altay';
  loadedFeature = 'recipe';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
