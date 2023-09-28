import { Component, OnInit } from '@angular/core';
import { MinesService } from '../core/services/mines.service';
import { ProductionFiguresService } from '../core/services/production-figures.service';
@Component({
  selector: 'app-mine-two',
  templateUrl: './mine-two.component.html',
  styleUrls: ['./mine-two.component.css']
})
export class MineTwoComponent implements OnInit{
  Mines: any = [];
  material:string = "Gold";
  constructor(private mineService: MinesService,private productionFiguresService: ProductionFiguresService ) {
    this.mineService.GetMines().subscribe((data: any) => {
      console.log("heyyyyy",data[1]);
      this.Mines = data[1];
    });

    // this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
    //   console.log("heyyyyy",data);
    //  // this.Mines = data[1];

    //});

  } 

  ngOnInit() {
    console.log("heloooo")
  }
}

