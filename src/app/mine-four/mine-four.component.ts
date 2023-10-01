import { Component, OnInit } from '@angular/core';
import { MinesService } from '../core/services/mines.service';
import { ProductionFiguresService } from '../core/services/production-figures.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-mine-four',
  templateUrl: './mine-four.component.html',
  styleUrls: ['./mine-four.component.css']
})
export class MineFourComponent implements OnInit{

 public chart: any;
 mines: any = [];
 contacts: any = [];
 material1:string = "Silver";
 material2:string = "Platinum";
 id:number = 3;
 yearArr : string [] = [];
 yieldArrSilver : string [] = [];
 yieldArrPlutinum : string [] = [];
 yieldArr: string [] = [];
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

    for(let i = 0; i<24 ;i++){
    this.yearArr.push(data[i].year);
    this.yieldArrSilver.push(data[i].yield)
    }
    console.log("silver yield",this.yieldArrSilver);
    console.log("silver year",this.yearArr);
    
    for(let j = 24; j<data.length ;j++){
      this.yieldArrPlutinum.push(data[j].yield)
      }
   console.log("platinum yield",this.yieldArrPlutinum);
   console.log("platinum year",this.yearArr);
  });

 } 

 createChart(){
   this.chart = new Chart("Chart4", {
     type: 'line', //this denotes tha type of chart

     data: {// values on X-Axis
       labels:this.yearArr,
       datasets: [
           {
             label: this.material1,
             data: this.yieldArrSilver, // // values on X-Axis
             backgroundColor: 'grey',
             borderColor: 'gray' // Add custom color border (Line)
           },
           {
            label: this.material2,
            data: this.yieldArrPlutinum, // // values on X-Axis
            backgroundColor: 'silver white',
            borderColor: 'siver white' // Add custom color border (Line)
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
