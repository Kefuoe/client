import { Component, Input, OnInit } from '@angular/core';
import { ProductionFiguresService } from 'src/app/core/services/production-figures.service';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  // material:string = "Gold";
   public chart: any;
  // yearArr : string [] = [];
  // yieldArr : string [] = [];

  @Input() yearArr : string [] = [];
  @Input() yieldArr : string [] = [];
  @Input() material:string = "";


  // constructor(private productionFiguresService: ProductionFiguresService) {
  
    
  //   this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
  //     console.log("heyyyyy",data);
  //     this.material = data[0].material;
  //    for (let variable in data ) {
  //   //  console.log("in line graph years",data[variable].year);
  //     this.yearArr.push(data[variable].year);
  //     this.yieldArr.push(data[variable].yield)
  //   }
  // console.log("in line graph years",this.yearArr);
  //   });
  // } 

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

        // labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
				// 				 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	      //  datasets: [
        //   // {
        //   //   label: "Sales",
        //   //   data: ['467','576', '572', '79', '92',
				// 	// 			 '574', '573', '576'],
        //   //   backgroundColor: 'blue'
        //   // },
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

     
    // this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
    //   console.log("heyyyyy",data);
    //  // this.Mines = data[1];

  //  });
  }
  ngOnInit(): void {
    this.createChart();
  }

}
