import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  name: String = "marwa"
  s = "<h3>HI THERE</h3>"
  myImg = "lg5.jpg"
  myImg1 = "assets/lg4.jpg"
  x = "block"
  classList = "btn btn-danger"
  btnTxt = "Hide"
  val = ""
  myTwoWay = "marwa"
  
  constructor() { 
  }

  ngOnInit(): void {
  }
  test(){ return "Hello Everyone"}
  test2(){ alert("HELLO!")}
  showHide(){
    if(this.x == "none"){
      this.x = "block"
      this.classList = "btn btn-danger"
      this.btnTxt = "Hide"
    }
    else{
      this.x = "none"
      this.classList = "btn btn-success"
      this.btnTxt = "Show"
    }
  }

  handleInput(event:any){
    console.log(event.target.value)
    this.val = event.target.value
  }

  handle2(myInput:any){
    console.log(myInput.value)
  }
}
