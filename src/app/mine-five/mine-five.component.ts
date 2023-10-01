import { Component, OnInit } from '@angular/core';
import { MinesService } from '../core/services/mines.service';
import { ProductionFiguresService } from '../core/services/production-figures.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-mine-five',
  templateUrl: './mine-five.component.html',
  styleUrls: ['./mine-five.component.css']
})
export class MineFiveComponent implements OnInit{
  public chart: any;
 mines: any = [];
 contacts: any = [];
 material3: string = "Silver";
 material2: string = "Copper";
 material1: string = "Iron";
 id: number = 4;
 yearArr: string [] = [];
 yieldArrSilver: string [] = [];
 yieldArrCopper: string [] = [];
 yieldArrIron: string [] = [];
 chartName = "Chart"

 
 constructor(private mineService: MinesService, private productionFiguresService: ProductionFiguresService) {
   this.mineService.GetMines().subscribe((data: any) => {
     console.log("mine info",data);
     console.log("heyyyyy",data[0].contact_person_id);
     this.id = data[3].contact_person_id;
     this.mines = data[3];
     this.mineService.GetMineContact(this.id).subscribe((data: any) => {
       console.log("Contact info",data);
       this.contacts = data[0];
     });
   });

   this.productionFiguresService.GetProductionById(this.id).subscribe((data: any) => {
    console.log("production id",data);

    for(let i = 0; i < 24; i++){
    this.yearArr.push(data[i].year);
    this.yieldArrIron.push(data[i].yield)
    }
    console.log("silver yield",this.yieldArrIron);
    console.log("silver year",this.yearArr);
    
    for(let j = 24; j < 48; j++){
      this.yieldArrCopper.push(data[j].yield)
      }
   console.log("platinum yield",this.yieldArrCopper);
   console.log("platinum year",this.yearArr);

   for(let j = 48; j<data.length; j++){
    this.yieldArrSilver.push(data[j].yield)
    }
    console.log("platinum yield",this.yieldArrSilver);
    console.log("platinum year",this.yearArr);
  });
 } 

 createChart(){
   this.chart = new Chart("Chart5", {
     type: 'line', //this denotes tha type of chart

     data: {// values on X-Axis
       labels:this.yearArr,
       datasets: [
           {
             label: this.material1,
             data: this.yieldArrIron, // // values on X-Axis
             backgroundColor: 'silver-gray',
             borderColor: 'silver-gray' // Add custom color border (Line)
           },
           {
            label: this.material2,
            data: this.yieldArrCopper, // // values on X-Axis
            backgroundColor: 'brown',
            borderColor: 'brown' // Add custom color border (Line)
          },
          {
            label: this.material3,
            data: this.yieldArrSilver, // // values on X-Axis
            backgroundColor: 'gray',
            borderColor: 'gray' // Add custom color border (Line)
          },
       ],
     },
     options: {
      aspectRatio:2.5
    } 
   });

  }

  ngOnInit() {
    console.log("heloooo")
    this.createChart();
  }

}

