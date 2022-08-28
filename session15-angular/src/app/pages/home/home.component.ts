import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [
    {title: "t1"},
    {title: "t2"},
    {title: "t3"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
