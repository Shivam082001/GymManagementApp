import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MembersService } from '../shared/members.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public objService:MembersService){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null){form.form.reset();}
    else{this.objService.membersData={MemberId:0,FirstName:'',LastName:'',DateOfBirth:'',Gender:'',ContactNumber:'',Email:'',JoinDate:'', Password:''}}
  }
  onSubmit(form:NgForm)
  {
      this.insertRecord(form);
    
  }
  onUpdate(form:NgForm)
  {
      this.updateRecord(form); 
  }
  insertRecord(form:NgForm){
    this.objService.postMembers().subscribe(res=>{this.resetForm(form);
      this.objService.getMembers();alert('Member Registered Successfully');},err=>{alert('Error !!!'+err);})
  }
  updateRecord(form:NgForm){
    this.objService.updateMembers().subscribe(res=>{this.resetForm(form);
      this.objService.getMembers();alert('Member Updated Successfully');},err=>{alert('Error !!!'+err);})
  }
}

