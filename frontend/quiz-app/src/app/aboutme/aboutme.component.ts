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
  }

  download(){
    this.check = false;
    // document.getElementById('download').style.backgroundImage = "../../assets/download.gif"
    setTimeout(()=>{
      document.getElementById('resume').click()
    },7000)
  }

}
