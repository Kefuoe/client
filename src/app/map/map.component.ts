import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  selectedOption: string="";
  selectedOption2: string="";
  latStore:any;
  lonStore:any;


  constructor() { }

  ngOnInit() {
  }

  IncidentOptions = [
    { value: 'Minor cut', label: 'Minor cut' },
    { value: 'Head Bump', label: 'Head Bump' },
    { value: 'Burn', label: 'Burn' },
    { value: 'Vehicle collision', label: 'Vehicle collision' },
    { value: 'Ankle strain', label: 'Ankle strain' },
    { value: 'Pedestrian accident', label: 'Pedestrian accident' },
  ];
    
  SeverityOptions = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
  ]
  
}