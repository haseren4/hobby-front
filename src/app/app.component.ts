import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavHorizComponent} from "./nav-horiz/nav-horiz.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHorizComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hobby.walkinsilver.com';
}
