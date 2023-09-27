import { Component,OnInit } from '@angular/core';
import { MinesService } from 'src/app/core/services/mines.service';
import { ProductionFiguresService } from 'src/app/core/services/production-figures.service';

@Component({
  selector: 'app-mines-list',
  templateUrl: './mines-list.component.html',
  styleUrls: ['./mines-list.component.css']
})
export class MinesListComponent implements OnInit {

  mines: any = [];
  contacts: any = [];
  material:string = "Gold";
  id  :any;
  yearArr : string [] = [];
  yieldArr : string [] = [];


  constructor(private mineService: MinesService, private productionFiguresService: ProductionFiguresService) {
    this.mineService.GetMines().subscribe((data: any) => {
      console.log("heyyyyy",data[0].contact_person_id);
      this.id = data[0].contact_person_id;
      this.mines = data[0];
      this.mineService.GetMineContact(this.id).subscribe((data: any) => {
        console.log("Contact info",data);
        this.contacts = data[0];
      });
    });

        
    this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
      console.log("heyyyyy",data);
      this.material = data[0].material;
     for (let variable in data ) {
    //  console.log("in line graph years",data[variable].year);
      this.yearArr.push(data[variable].year);
      this.yieldArr.push(data[variable].yield)
    }
     console.log("in line graph years",this.yearArr);
    });
    
  

  } 

    ngOnInit() {
      console.log("heloooo")
    }
}
