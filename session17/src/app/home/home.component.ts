import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgs: any[] = []
  isLoaded: boolean = false
  errMsg: String = ""

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.getMyData()
  }

  getMyData(){
    this._data.getImages().subscribe(
      data => {
        console.log(data)
        this.imgs = data
      },
      e => {
        this.errMsg = e.message
        this.isLoaded = true
      },
      () => {
        this.isLoaded = true
      } // finish
    )
  }

}
