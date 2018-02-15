import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Person {
    name: string;
}

@Component({
  selector: 'home',  // <home></home>
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/person/5a850e2e5c2088653a1b49a6').subscribe(data => console.log(data));
  }
}
