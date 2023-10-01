import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../core/services/incidents.service';
import { Chart } from 'chart.js/auto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules
import { ProductionFiguresService } from 'src/app/core/services/production-figures.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {
  // form: FormGroup ; // Declare a form group
  incidents: any = [];
  public chart: any;
  public pieChart: any;
  // yearFrom:any;
  // yearTo:any;
  figures: any[] = [];
  totalyield = "";
  sum = 0;
  constructor(private incidentsService: IncidentsService, private formBuilder: FormBuilder,
    private productionFiguresService: ProductionFiguresService) { }
  yearTo: string = "";
  yearFrom: string = "";
  mineData = new Array<number>()
  ngOnInit() {
    this.createChart();
    this.createPieChart()
    // console.log ("year from", this.formData.yearFrom)
    this.incidentsService.GetIncidents().subscribe((data: any) => {
      console.log('incidents are', data)
      this.incidents = data[1];
    });

    this.productionFiguresService.GetProductionFiguresFilter(this.yearFrom, this.yearFrom).subscribe((data: any) => {
      this.figures = data
      console.log("datAa", data)
      //  console.log ("year from", this.formData.yearFrom)
      //  console.log ("type of value", typeof  this.formData.yearFrom)

    });

  }
  onSubmit() {
    // Access the form values here:;
    this.productionFiguresService.GetProductionFiguresFilter((this.yearFrom), (this.yearTo)).subscribe((data: any) => {
      this.figures = data
      console.log("data", data);
      this.sum = 0;
      for (let i = 0; i < data.length; i++) {
        this.sum += Number(data[i].yield);
      }
      this.totalyield = "Total mineral yield is " + this.sum;
      // this.chart = new Chart("Bar1Chart", {
      //   type: 'bar', //this denotes tha type of chart
      //   data: {// values on X-Axis
      //     labels: [
      //       "GoldRush",
      //       "Diamond Delve",
      //       "Copper Canyon",
      //       "Silver Stream",
      //       "iron Mountain",
      //     ],
      //     datasets: [
      //       {
      //         label: "Low",
      //         backgroundColor: "pink",
      //         borderColor: "red",
      //         borderWidth: 1,
      //         data: [2,4,2,1,1]
      //       },
      //       {
      //         label: "Medium",
      //         backgroundColor: "lightblue",
      //         borderColor: "blue",
      //         borderWidth: 1,
      //         data: [2,1,3,2,3]
      //       },
      //       {
      //         label: "High",
      //         backgroundColor: "lightgreen",
      //         borderColor: "green",
      //         borderWidth: 1,
      //         data: [1,0,0,2,1]
      //       }
      //     ]
      //   },
      //   options: {
      //     aspectRatio:2.5
      //   }

      // });
    });
  }

  createChart() {
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
            data: [2, 4, 2, 1, 1]
          },
          {
            label: "Medium",
            backgroundColor: "lightblue",
            borderColor: "blue",
            borderWidth: 1,
            data: [2, 1, 3, 2, 3]
          },
          {
            label: "High",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: [1, 0, 0, 2, 1]
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  createPieChart() {
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
            data: [6, 3, 8, 2, 5, 1]
          },

        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }


}

