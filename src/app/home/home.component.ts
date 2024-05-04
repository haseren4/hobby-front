import { Component } from '@angular/core';
import {RadioContactsComponent} from "../radio-components/radio-contacts/radio-contacts.component";
import {RadioPropBannerComponent} from "../radio-components/radio-prop-banner/radio-prop-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RadioContactsComponent,
    RadioPropBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
