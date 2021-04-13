import { AuthenticationService } from './../shared/authentication.service';
import { QuestionService } from './../shared/question.service';
import { Component, OnInit } from '@angular/core';

// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-myattempts',
  templateUrl: './myattempts.component.html',
  styleUrls: ['./myattempts.component.scss']
})
export class MyattemptsComponent implements OnInit {
  user_id
  data


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
      console.log(data.msg)
    })
    }

  }
