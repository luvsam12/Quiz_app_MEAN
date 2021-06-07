import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  check:boolean = true;
  arr: Array<number> = [1,2,3]

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
