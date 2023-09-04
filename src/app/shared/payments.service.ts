import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payments } from './payments.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private objHttp:HttpClient) { }
  readonly paymentUrl= "https://localhost:5001/api/payments";
  paymentData:Payments=new Payments();
  paymentList:Payments[];
  getPayments(){
    this.objHttp.get(this.paymentUrl).toPromise().then(res=>this.paymentList =res as Payments[]);
  }
  postPayments(){

    return this.objHttp.post(this.paymentUrl,this.paymentData);
  }
  putPayments(){
    return this.objHttp.put(`${this.paymentUrl}/${this.paymentData.PaymentId}` ,this.paymentData);
  }
  deletePayments(PaymentId:number)
{
  return this.objHttp.delete('$(this.paymentUrl}/$(PaymentId}');
}
}
