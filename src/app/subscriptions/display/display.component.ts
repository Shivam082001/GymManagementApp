import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/shared/subscriptions.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  constructor(public objs:SubscriptionsService){}
  ngOnInit(): void {
    this.objs.getSubscriptions();
  }
  

}