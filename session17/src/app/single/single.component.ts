import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  id:any
  img: any
  isLoaded: boolean = false
  errMsg: String = ""

  constructor(private _activatedRoute: ActivatedRoute, private _data: DataService) { }

  ngOnInit(): void {
    this.id =this._activatedRoute.snapshot.params["id"] //req.params.id
    this.getSingle(this.id)
  }

  getSingle(id:any){
    this._data.getSingleImg(id).subscribe(
      result => {
        console.log(result)
        this.img= result
      },
      e => {
        this.errMsg = e.message
        this.isLoaded = true
      },
      () => { // finish
        this.isLoaded = true
      }
    )
  }

}
