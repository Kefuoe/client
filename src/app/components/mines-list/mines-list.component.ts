import { Component,OnInit } from '@angular/core';
import { MinesService } from 'src/app/core/services/mines.service';

@Component({
  selector: 'app-mines-list',
  templateUrl: './mines-list.component.html',
  styleUrls: ['./mines-list.component.css']
})
export class MinesListComponent implements OnInit {
  Mines: any = [];
  constructor(private mineService: MinesService) {
    this.mineService.GetMines().subscribe((data: any) => {
      console.log("heyyyyy",data);
      this.Mines = data;
    });
  } 

    ngOnInit() {
      console.log("heloooo")
    }
}
