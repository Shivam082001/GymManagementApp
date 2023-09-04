import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Payments } from 'src/app/shared/payments.model';
import { PaymentsService } from 'src/app/shared/payments.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
constructor  ( public objService:PaymentsService){}
ngOnInit() {
  this.resetForm();
  
}
resetForm(form?:NgForm){
  if(form!=null){
    form.form.reset();
  }
  else{
  this.objService.paymentData={ 
    PaymentId: 0,
    MemberId: 0,
    PaymentDate:'',
    PaymentType:'',
    Amount: 0
  }
  }
}
onSubmit(form:NgForm){
  
    this.insertRecord(form);
 
}
onUpdate(form:NgForm){
  this.updateRecord(form);
}
insertRecord(form:NgForm){
  this.objService.postPayments().subscribe(res=>{this.resetForm(form);
    this.objService.getPayments();
  alert('Payment Success');
  },
  err=>{alert('Error'+err);})
}
updateRecord(form:NgForm){
  this.objService.putPayments().subscribe(res=>{this.resetForm(form);
  this.objService.getPayments();
alert('Payment updated');},
err=>{alert('Error'+err);})
}
}
