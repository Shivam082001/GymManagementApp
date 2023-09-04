import { Component, OnInit } from '@angular/core';
import { Trainers } from '../../shared/trainers.model';
import { TrainersService } from '../../shared/trainers.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  host: {'some-binding': 'some-value'}
})
export class DisplayComponent implements OnInit {

  constructor(public trainerService:TrainersService) { }

  ngOnInit(): void {
    this.trainerService.getTrainers();
  }
  // ngOnInit(){
  //   this.trainerService.getTrainers().subscribe(data=>{
  //     this.trainerService.listTrainers=data;
  //   });
  // }
  
}