import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'admin',  // <home></home>
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  public executeBallot(event){
    this.http.post('http://localhost:3000/api/ballot/execute')
      .subscribe(data => {
        console.log(data);
      });
  }
  public ngOnInit() {
  }
}
