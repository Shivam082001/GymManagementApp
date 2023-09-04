import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/shared/payments.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit{
  
  constructor(public objs:PaymentsService){}
    ngOnInit():void{
      this.objs.getPayments();
    }
}