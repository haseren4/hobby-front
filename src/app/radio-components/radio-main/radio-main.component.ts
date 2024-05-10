import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {RadioPropBannerComponent} from "../radio-prop-banner/radio-prop-banner.component";
import {RadioBandPrivComponent} from "../radio-band-priv/radio-band-priv.component";
import {RadioContactsComponent} from "../radio-contacts/radio-contacts.component";

@Component({
  selector: 'app-radio-main',
  templateUrl: 'radio-main.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RadioPropBannerComponent,
    RadioBandPrivComponent,
    RadioContactsComponent
  ],
  styleUrls: ['./radio-main.component.css']
})
export class RadioMainComponent implements OnInit {
  htRadios: Radio[] | undefined;
  mobileRadios : Radio[] |undefined;
  contactStats : ContactStatsResponse | undefined;

  baseApiURL = "http://hobby.walkinsilver.com:8080/api/";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getContactStats().subscribe(res => {
      this.contactStats = res
    });

    this.getHTRadios().subscribe(data => {
      this.htRadios = data;
//      console.log(this.htRadios);
    });

    this.getMobileRadios().subscribe(data =>{
      this.mobileRadios = data;
//      console.log(this.mobileRadios);
    });

  }

  public getHTRadios() {
    return this.httpClient.get<Radio[]>(this.baseApiURL + "radio/HT");
  }

  public getMobileRadios() {
    return this.httpClient.get<Radio[]>(this.baseApiURL + "radio/Mobile");
  }
  public getContactStats() {
    return this.httpClient.get<ContactStatsResponse>(this.baseApiURL + "contacts/stats");
  }
}

export class Radio {
  id: number | undefined;
  manufacturer: string | undefined;
  model: string | undefined;
  setup: string | undefined;
  bands: string | undefined;
  maxPwr: number | undefined;
  description: string | undefined;
  linkURL: string | undefined;
  imgURL: string | undefined;
}

export class ContactStatsResponse{
  totalContacts: number | undefined;
  totalAmateurContacts: number | undefined;
  totalGMRSContacts: number | undefined;
}
