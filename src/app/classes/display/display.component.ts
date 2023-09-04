import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/shared/classes.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  
})
export class DisplayComponent implements OnInit {

  constructor(public classService:ClassesService) { }

  ngOnInit(): void {
    this.classService.getClasses();
  }
}
