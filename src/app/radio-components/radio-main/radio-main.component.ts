import { Component } from '@angular/core';
import {RadioPropBannerComponent} from "../radio-prop-banner/radio-prop-banner.component";
import {RadioContactsComponent} from "../radio-contacts/radio-contacts.component";

@Component({
  selector: 'app-radio-main',
  standalone: true,
  imports: [
    RadioPropBannerComponent,
    RadioContactsComponent
  ],
  templateUrl: './radio-main.component.html',
  styleUrl: './radio-main.component.css'
})
export class RadioMainComponent {

}
