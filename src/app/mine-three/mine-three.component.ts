import { Component, OnInit } from '@angular/core';
import { MinesService } from '../core/services/mines.service';
import { ProductionFiguresService } from '../core/services/production-figures.service';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-mine-three',
  templateUrl: './mine-three.component.html',
  styleUrls: ['./mine-three.component.css']
})
export class MineThreeComponent implements OnInit{
public chart: any;
 mines: any = [];
 contacts: any = [];
 material:string = "Copper";

 id  :any;
 yearArr : string [] = [];
 yieldArr : string [] = [];
 chartName = "Chart"
 //  public chart: any;
 // material:string = "Gold";
 // material2:string = "Diamond";
 //  public chart: any;
 // yearArr : string [] = [];
 // yieldArr : string [] = [];
 // yieldArr2: string [] = [];
 
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

       
   this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
     console.log("heyyyyy",data);
     this.material = data[1].material;
    for (let variable in data ) {
   //  console.log("in line graph years",data[variable].year);
     this.yearArr.push(data[variable].year);
     this.yieldArr.push(data[variable].yield)
   }
    console.log("in line graph years",this.yearArr);
   });

 } 

 createChart(){
 
   this.chart = new Chart("Chart3", {
     type: 'line', //this denotes tha type of chart

     data: {// values on X-Axis
       labels:this.yearArr,
       datasets: [
           {
             label: this.material,
             data: this.yieldArr, // // values on X-Axis
             backgroundColor: 'blue'
           }
       ],
       // labels:this.yearArr
       //  datasets: [
       //   {
       //     label: this.material2,
       //     data: ['467','576', '572', '79', '92',
       // 				 '574', '573', '576'],
       //     backgroundColor: 'blue'
       //   },
       //   {
       //     label: "Profit",
       //     data: ['542', '542', '536', '327', '17',
       // 					 '0.00', '538', '541'],
       //     backgroundColor: 'limegreen'
       //   }  
       // ]
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