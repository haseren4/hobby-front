import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {RadioMainComponent} from "./radio-components/radio-main/radio-main.component";
import {JewelryMainComponent} from "./jewelry-components/jewelry-main/jewelry-main.component";
import {WargamingMainComponent} from "./wargaming-components/wargaming-main/wargaming-main.component";

export const routes: Routes = [
  {path: "" , component:RadioMainComponent},
  {path: "contact", component:ContactComponent},
  {path: "jewelry", component:JewelryMainComponent},
  {path: "wargaming",component:WargamingMainComponent},
  {path: "radio", component:RadioMainComponent}
];
