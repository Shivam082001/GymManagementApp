import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/shared/members.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  
})
export class DisplayComponent implements OnInit{
  
  constructor(public objs:MembersService){}
    ngOnInit(): void{
      this.objs.getMembers();
    }
}