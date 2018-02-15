import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public username: string;
  public email: string;
  public primary_vehicle: string;
  public points_balance: number;
  public login1: string;
  public login2: string;

  constructor(
    private http: HttpClient
  ) { }

  
  public ngOnInit() {
    this.http.get('http://localhost:3000/api/person/5a855362dbb8af4985fba9de')
      .subscribe(data => {
        this.username = data.name;
        this.email = data.email
        this.primary_vehicle = data.vehicles[0].licence;
        this.points_balance = data.points_bal;
        this.login1 = this.username + " (" + this.email + ")";
        this.login2 = "Vehicle: " + this.primary_vehicle + " | Points: " + this.points_balance;
      });
  }
}
