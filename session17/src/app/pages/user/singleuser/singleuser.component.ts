import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

  id: any 
  user:any
  isLoaded: boolean = false
  errMsg: String = ""

  constructor(private _activatedRoute: ActivatedRoute, private _data: DataService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params["id"]
    this.getSingle(this.id)
  }

  getSingle(id:any){
    this._data.getSingleUser(id).subscribe(
      result => {
        console.log(result)
        this.user= result
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
