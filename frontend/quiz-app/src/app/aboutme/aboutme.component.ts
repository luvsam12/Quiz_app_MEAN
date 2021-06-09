import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutmeComponent implements OnInit {
  check:boolean = true;
  arr: Array<number> = [1,2,3]
  number_data = [
    {
      name: "lines of code.",
      data: 3049
    },
    {
      name: "pixels rendered",
      data: 154029
    },
    {
      name: "projects",
      data: 0
    }
  ]
  quote_data = [
    {
      msg: "  Many of life's failures are people who did not realize how close they were to success when they gave up.  ",
      person: "https://i.guim.co.uk/img/media/b933fd4eb7788b737b0b304ec777447d8ac6ae93/0_183_3200_1918/master/3200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bfd66629efcac9d0fef15b5cb7e33396",
      name: "Thomas A. Edison"
    },
    {
      msg: "If you're changing the world, you're working on important things. You're excited to get up in the morning.",
      person: "https://akshaysaini.in/img/quotes/larry-page.jpg",
      name: "Larry Page"
    },
    {
      msg: "Because the people who are crazy enough to think they can change the world are the ones who do.",
      person: "https://akshaysaini.in/img/quotes/steve-jobs.jpg",
      name: "Steve Jobs"
    }
  ]
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  //core skills
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['HTML', 'JS', 'CSS', 'C++', 'OOP\'s', 'OS', 'DBMS', 'Data Structures', 'Python', 'Angular', 'React', 'Node', 'Express', 'redux', 'Bootstrap', 'Material', 'MongoDB', 'MySQL'];

  public radarChartData: ChartDataSets[] = [
    { data: [90, 80, 85, 80, 75, 70, 70, 65, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Core' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 80, 65, 70, 80, 80, 80, 70, 65], label: 'Modern Web' }
  ];
  public radarChartType: ChartType = 'radar';




  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false
   }

  ngOnInit(): void {
    console.log(this.images)
    this.numberWithSpaces("lines")
    this.numberWithSpaces("pixels")
    this.numberWithSpaces("proj")
  }

  numberDisplay(count){
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  numberWithSpaces(name) {
    let set = setInterval(()=>{
      if(name == "lines"){
        if(this.number_data[0].data < 3749){
          this.number_data[0].data++;
        }
        else{
          clearInterval(set);
        }
      }
      else if(name == "pixels"){
        if(this.number_data[1].data < 154629){
          this.number_data[1].data++;
        }
        else{
          clearInterval(set);
        }
      }
      else if(name == "proj"){
        if(this.number_data[2].data < 5){
          this.number_data[2].data++;
        }
        else{
          clearInterval(set);
        }
      }
    },10)
  }

  download(){
    this.check = false;
    // document.getElementById('download').style.backgroundImage = "../../assets/download.gif"
    setTimeout(()=>{
      document.getElementById('resume').click()
    },7000)
  }

}
