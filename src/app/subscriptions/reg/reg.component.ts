import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionsService } from 'src/app/shared/subscriptions.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  constructor  ( public objService:SubscriptionsService){}
  ngOnInit() {
    this.resetForm();
    
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    this.objService.subscriptionData={ 
      SubscriptionId:0,
      MemberId :0,
      StartDate:'',
      EndDate :'',
      SubscriptionType :'',
      AmountPaid :0
  
    }
  }
  onSubmit(form:NgForm){
    
      this.insertRecord(form);
   
  }
  onUpdate(form:NgForm){
    this.updateRecord(form);
  }
  insertRecord(form:NgForm){
    this.objService.postSubscriptions().subscribe(res=>{this.resetForm(form);
      this.objService.getSubscriptions();
    alert('Subscription Success');
    },
    err=>{alert('Error'+err);})
  }
  updateRecord(form:NgForm){
    this.objService.putSubscriptions().subscribe(res=>{this.resetForm(form);
    this.objService.getSubscriptions();
  alert('Subscription updated');},
  err=>{alert('Error'+err);})
  }
  }
