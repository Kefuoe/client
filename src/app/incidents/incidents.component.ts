import { Component } from '@angular/core';
import { IncidentsService } from '../core/services/incidents.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent {

  incidents: any = [];
  public chart: any;
  public pieChart: any;

  constructor(private incidentsService: IncidentsService,) {
    this.incidentsService.GetIncidents().subscribe((data: any) => {
      console.log('incidents are',data)
      this.incidents = data[1];
   
    });
  }

  createChart(){
    this.chart = new Chart("BarChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: [
          "GoldRush",
          "Diamond Delve",
          "Copper Canyon",
          "Silver Stream",
          "iron Mountain",
        ],
        datasets: [
          {
            label: "Low",
            backgroundColor: "pink",
            borderColor: "red",
            borderWidth: 1,
            data: [2,4,2,1,1]
          },
          {
            label: "Medium",
            backgroundColor: "lightblue",
            borderColor: "blue",
            borderWidth: 1,
            data: [2,1,3,2,3]
          },
          {
            label: "High",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: [1,0,0,2,1]
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  createPieChart(){
    this.pieChart = new Chart("PieChart", {
      type: 'pie', //this denotes tha type of chart
      data: {
        labels: [
          "Burn",
          "Vehicle Collision",
          "Minor Cut",
          "Ankle Strain",
          "Head Bump",
          "Pedestrian Accident"
        ],
        datasets: [
          {
            label: "Number of incidents",
            backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
            hoverOffset: 5,
            data: [6,3,8,2,5,1]
          },

        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  
  ngOnInit() {

    this.createChart();
    this.createPieChart()
  }
  
}

