import { Component,OnInit } from '@angular/core';
import { AttendancesService } from 'src/app/shared/attendances.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  
})
export class DisplayComponent implements OnInit{
constructor(public objs:AttendancesService){}
  ngOnInit(): void {
    this.objs.getAttendance();
  }
}