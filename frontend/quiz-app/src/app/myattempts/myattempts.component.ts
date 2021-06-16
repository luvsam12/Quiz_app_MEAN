import { AuthenticationService } from './../shared/authentication.service';
import { QuestionService } from './../shared/question.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-myattempts',
  templateUrl: './myattempts.component.html',
  styleUrls: ['./myattempts.component.scss']
})
export class MyattemptsComponent implements OnInit {
  user_id
  data = []
  lineChartData1


  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [];

  daySelected: string;

  public lineChartData:Array<any> = [{
    data: [40, 80, 60, 50, 40],
    label: 'Series A',
    lineTension: 0,
    pointRadius: [4, 4, 4, 4],
    borderWidth: 2,
    pointHoverBorderWidth: 8,

  }];

  public lineChartLabels:Array<any> = [
    '20180430',
    '20180501',
    '20180502',
    '20180503',
    '20180504'
  ];

  public lineChartOptions:any = {
    responsive: true,
    layout: {
      padding: {
          top: 10
      }
    },
    tooltips: {
      enabled: true
    },
    elements: {
      rectangle: {
          borderWidth: 0,
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
            display: true,
            drawBorder: false,
            borderDash: [5, 2],
            zeroLineBorderDash: [5, 2],
            zeroLineColor: '#c5c0bc',
            color: '#c5c0bc'
        },
        ticks: {
          fontStyle: 'normal',
          callback: function(value, index, values) {
            const dayLetter = moment(value).format('dddd').charAt(0);
            const dayFormatted = moment(value).format('DD/MMM').toLowerCase();

            return [dayLetter, dayFormatted];
          }
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
            display: false,
            drawBorder: false,
            lineWidth: 0,
        },
        ticks: {
          min: 0,
          max: 100
        }
      }]
    }
  };

  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: '#ec7404',
      pointBackgroundColor: ['#fff', '#fff', '#fff', '#fff'],
      pointBorderColor: '#ec7404',
      pointHoverBackgroundColor: '#ec7404',
      pointHoverBorderColor: '#ec7404'
    }
  ];

  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
    if (e.active.length > 0) {
      var element = e.active[0];
      element._chart.config.data.datasets[0].pointBackgroundColor[element._index] = '#ec7404';
      for (var pointIndex in element._chart.config.data.datasets[0].pointBackgroundColor) {
        if (pointIndex == element._index) {
          element._chart.config.data.datasets[0].pointBackgroundColor[pointIndex] = '#ec7404';
          element._chart.config.data.datasets[0].pointRadius[pointIndex] = 6;
        } else {
          element._chart.config.data.datasets[0].pointBackgroundColor[pointIndex] = '#fff';
          element._chart.config.data.datasets[0].pointRadius[pointIndex] = 4;
        }
      }

      element._chart.update();
      this.daySelected = moment(this.lineChartLabels[element._index]).format('DD/MM/YYYY');
    }
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }







  constructor(
    private QuestionService: QuestionService,
    private AuthenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if(this.AuthenticationService.check_login()){
      this.user_id = JSON.parse(localStorage.getItem('token'))
    }

    let data = {
      user_id: this.user_id
    }

    this.QuestionService.get_results(data).subscribe(data => {
      this.data = data.msg;
      console.log(this.data)
      this.lineChartData[0].data = this.data.map(res => {return res.score})
      this.lineChartLabels = this.data.map(res => { return res.date})
    })
    }

  }
