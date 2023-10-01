import { Component, OnInit } from '@angular/core';
import { MinesService } from '../core/services/mines.service';
import { ProductionFiguresService } from '../core/services/production-figures.service';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-mine-two',
  templateUrl: './mine-two.component.html',
  styleUrls: ['./mine-two.component.css']
})
export class MineTwoComponent implements OnInit {
  public chart: any;
  mines: any = [];
  contacts: any = [];
  material: string = "Diamond";
  id: any;
  yearArr: string[] = [];
  yieldArr: string[] = [];
  chartName = "Chart"

  constructor(private mineService: MinesService, private productionFiguresService: ProductionFiguresService) {
    this.mineService.GetMines().subscribe((data: any) => {
      this.id = data[1].contact_person_id;
      this.mines = data[1];
      this.mineService.GetMineContact(this.id).subscribe((data: any) => {
        this.contacts = data[0];
      });
    });


    this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
      this.material = data[1].material;
      for (let variable in data) {
        this.yearArr.push(data[variable].year);
        this.yieldArr.push(data[variable].yield)
      }
    });
  }

  createChart() {
    this.chart = new Chart("Chart2", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: this.yearArr,
        datasets: [
          {
            label: this.material,
            data: this.yieldArr, // // values on X-Axis
            backgroundColor: 'gray white',
            borderColor: 'gray white'
          }
        ],

      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        aspectRatio: 2.5
      }
    });
  }

  ngOnInit() {
    this.createChart();
  }
}

