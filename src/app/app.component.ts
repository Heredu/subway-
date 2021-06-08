import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  options:AnimationOptions = {
    path:'../assets/data.json'
  }

  title = 'Metro';
  
}
