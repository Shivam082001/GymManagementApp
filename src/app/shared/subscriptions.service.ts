import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subscriptions } from './subscriptions.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private objHttp:HttpClient) { }
  readonly subscriptionUrl= "https://localhost:5001/api/subscriptions";
  subscriptionData:Subscriptions=new Subscriptions();
  subscriptionList:Subscriptions[];
  getSubscriptions(){
    this.objHttp.get(this.subscriptionUrl).toPromise().then(res=>this.subscriptionList = res as Subscriptions[]);

  }
  postSubscriptions(){

    return this.objHttp.post(this.subscriptionUrl,this.subscriptionData);
  }
  putSubscriptions(){
    return this.objHttp.put(`${this.subscriptionUrl}/${this.subscriptionData.SubscriptionId}` ,this.subscriptionData);
  }
  deleteSubscriptions(SubscriptionId:number)
{
  return this.objHttp.delete(`${this.subscriptionUrl}/${SubscriptionId}`);
}
}
