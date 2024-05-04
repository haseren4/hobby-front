import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  constructor(private httpClient:HttpClient){
  }
  public baseApiURL = "http://localhost:8080/api/";
  public cYear:any = 2024;
  public nowDate:any;
  FooterComponent(){
  }

  ngOnInit(): void {

    this.cYear = 2024;

  }
}

