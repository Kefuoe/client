import { Component, OnInit } from '@angular/core';
import { MinesService } from '../core/services/mines.service';
import { ProductionFiguresService } from '../core/services/production-figures.service';
import { IncidentsService } from '../core/services/incidents.service';

import { Chart } from 'chart.js/auto';
import * as Leaflet from 'leaflet'; 
import "leaflet-control-geocoder";

@Component({
  selector: 'app-mine-two',
  templateUrl: './mine-two.component.html',
  styleUrls: ['./mine-two.component.css']
})
export class MineTwoComponent implements OnInit {
  public chart: any;
  mines: any = [];
  contacts: any = [];
  material: string = "Diamond";
  id: any;
  yearArr: string[] = [];
  yieldArr: string[] = [];
  incidents: string [] = [];
  id2:number = 1;
  latStore:any;
  lonStore:any;
  selectedOption: string="";
  selectedOption2: string="";
  errorMessage: string="";
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  markersDel: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: 28.626137, lng: 79.821603 }
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

  constructor(private mineService: MinesService, private productionFiguresService: ProductionFiguresService,private incidentService: IncidentsService) {}
   
  ngOnInit() {
    this.createChart();
    this.mineService.GetMines().subscribe((data: any) => {
      this.id = data[1].contact_person_id;
      this.mines = data[1];
      this.mineService.GetMineContact(this.id).subscribe((data: any) => {
        this.contacts = data[0];
      });
    });

    this.productionFiguresService.GetProductionMaterial(this.material).subscribe((data: any) => {
      this.material = data[1].material;
      for (let variable in data) {
        this.yearArr.push(data[variable].year);
        this.yieldArr.push(data[variable].yield)
      }
    });
  }
  
  createChart() {
    this.chart = new Chart("Chart2", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: this.yearArr,
        datasets: [
          {
            label: this.material,
            data: this.yieldArr, // // values on X-Axis
            backgroundColor: 'gray white',
            borderColor: 'gray white'
          }
        ],
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        aspectRatio: 2.5
      }
    });
  }

  initMarkers() {
    this.mineService.GetMines().subscribe((data1: any) => {
      this.incidentService.GetIncidentsById(this.id2).subscribe((data: any) => {
        this.incidents.push(data)
        const initialMarkers = [
        {
          position: { lat: (data[0].latitude), lng: data[0].longitude },
          description: data[0].description,
          severity:data[0].severity,
          draggable: true
        },
        {
          position: { lat: data[1].latitude, lng: data[1].longitude },
          description: data[1].description,
          severity:data[1].severity,
          draggable: true
        },
        {
          position: { lat: data[2].latitude, lng: data[2].longitude },
          description: data[2].description,
          severity:data[2].severity,
          draggable: true
        },
        {
          position: { lat: data[3].latitude, lng: data[3].longitude },
          description: data[3].description,
          severity:data[3].severity,
          draggable: true
        },
        {
          position: { lat: data[4].latitude, lng: data[4].longitude },
          description: data[4].description,
          severity:data[4].severity,
          draggable: true
        },
        
      ];
  
      var icon = Leaflet.icon({
        iconUrl:'icon.png',
        iconSize: [64,74],
        iconAnchor:[32,74],
        popupAnchor:[8,-50]
      });
      for (let index = 0; index < initialMarkers.length; index++) {
        const data = initialMarkers[index];
        const marker = this.generateMarker(data, index);
        marker.addTo(this.map).bindPopup(`<b>${data.description}, ${data.severity}, ${data.position.lat},  ${data.position.lng} </b>`);
        this.map.panTo(data.position);
        this.markers.push(marker)
      } 
      });
    })
   
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    this.latStore = $event.latlng.lat;
    this.lonStore = $event.latlng.lng;
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log(typeof ($event.target.getLatLng()));
  } 

  addMarker($event: any){
    this.errorMessage = ""
    if (this.latStore != null|| this.lonStore != null|| this.selectedOption!= "" || this.selectedOption2!= "") {
      const data = {
        position: { lat: this.latStore, lng: this.lonStore},
        description: this.selectedOption,
        severity: this.selectedOption2,
        draggable: true
      }
      const marker = this.generateMarker(data, this.markers.length - 1);
      marker.addTo(this.map).bindPopup(`<b>${data.position.lat}, ${data.position.lng}, ${data.description}, ${data.severity}</b>`);
      this.markersDel.push(marker);
    } else {
      this.errorMessage = "Please enter all values"
    }
  }

  deleteMarker(){
    this.map.removeLayer(this.markersDel[0])
    this.markersDel.splice(0, 1)
     this.latStore = "";
     this.lonStore = "";
     this.selectedOption ="";
     this.selectedOption2 ="";
  }


//drop down code
  onDropdownChange() {
    this.errorMessage = "";
    console.log('Selected option:', this.selectedOption);
  }

  onDropdownChange2() {
    this.errorMessage = "";
    console.log('Selected option:', this.selectedOption2);
  }

}
  

