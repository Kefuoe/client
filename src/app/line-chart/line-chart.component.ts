import { Component, Input, OnInit } from '@angular/core';
import { ProductionFiguresService } from 'src/app/core/services/production-figures.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
 // public chart: any;
  material: string = "Gold";
  material2: string = "Diamond";
  yearArr: string [] = [];
  yieldArr: string [] = [];

  constructor(private productionFiguresService: ProductionFiguresService) {
    this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
      this.material = data[0].material;
      this.material2 = data[1].material;
     for (let variable in data ) {
      this.yearArr.push(data[variable].year);
      this.yieldArr.push(data[variable].yield);
    }
    });
  } 

}