import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  check:boolean = true;
  arr: Array<number> = [1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

  download(){
    this.check = false;
    // document.getElementById('download').style.backgroundImage = "../../assets/download.gif"
    setTimeout(()=>{
      document.getElementById('resume').click()
    },7000)
  }

}
