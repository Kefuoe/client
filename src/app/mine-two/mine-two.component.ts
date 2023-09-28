import { Component, OnInit } from '@angular/core';
import { MinesService } from '../core/services/mines.service';
import { ProductionFiguresService } from '../core/services/production-figures.service';
import {Chart} from 'chart.js/auto';
@Component({
  selector: 'app-mine-two',
  templateUrl: './mine-two.component.html',
  styleUrls: ['./mine-two.component.css']
})
export class MineTwoComponent implements OnInit{
   public chart: any;
  mines: any = [];
  contacts: any = [];
  material:string = "Diamond";
  id  :any;
  yearArr : string [] = [];
  yieldArr : string [] = [];
  chartName = "Chart"
  
  constructor(private mineService: MinesService, private productionFiguresService: ProductionFiguresService) {
    this.mineService.GetMines().subscribe((data: any) => {
      console.log("heyyyyy",data[0].contact_person_id);
      this.id = data[1].contact_person_id;
      this.mines = data[1];
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
  
    this.chart = new Chart("Chart2", {
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

