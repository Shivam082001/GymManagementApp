import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Members } from './members.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private objhttp:HttpClient) { }
  memberUrl='https://localhost:5001/api/members';
  membersList:Members[];
  membersData:Members=new Members();
  
postMembers()
{
  return this.objhttp.post(this.memberUrl,this.membersData);
}

updateMembers()
{
  return this.objhttp.put(`${this.memberUrl}/${this.membersData.MemberId}` ,this.membersData);
}
getMembers()
{
  this.objhttp.get(this.memberUrl).toPromise().then(res=>this.membersList =res as Members[]);
// return this.objhttp.get<Trainers[]>(this.trainersUrl);
}
deleteMembers(MemberId:number)
{
  return this.objhttp.delete(this.memberUrl+"/"+MemberId)
  // return this.objhttp.delete(`${this.memberUrl}/${MemberId}`);
}
}

