import { Component, Input, OnInit } from '@angular/core';
import { ProductionFiguresService } from 'src/app/core/services/production-figures.service';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public chart: any;

  @Input() yearArr : string [] = [];
  @Input() yieldArr : string [] = [];
  @Input() material:string = "";

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels:this.yearArr,
        datasets: [
            {
              label: this.material,
              data: this.yieldArr, // // values on X-Axis
              backgroundColor: 'blue'
            }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
