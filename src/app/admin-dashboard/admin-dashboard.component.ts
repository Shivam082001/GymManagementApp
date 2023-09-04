import { Component, OnInit, Renderer2 } from '@angular/core';
import { AttendancesService } from '../shared/attendances.service';
import { ClassesService } from '../shared/classes.service';
import { MembersService } from '../shared/members.service';
import { PaymentsService } from '../shared/payments.service';
import { TrainersService } from '../shared/trainers.service';
import { SubscriptionsService } from '../shared/subscriptions.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  selectedDiv: number | null = null;

  constructor(private renderer: Renderer2, public objA:AttendancesService, public classService:ClassesService, public objM:MembersService, public objP:PaymentsService,public objS:SubscriptionsService, public trainerService:TrainersService) {}

  ngOnInit(): void {
    this.objA.getAttendance();
    this.classService.getClasses();
    this.objM.getMembers();
    this.objP.getPayments();
    this.objS.getSubscriptions();
    this.trainerService.getTrainers();
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null){form.form.reset();}
    else{this.objM.membersData={MemberId:0,FirstName:'',LastName:'',DateOfBirth:'',Gender:'',ContactNumber:'',Email:'',JoinDate:'', Password:''}}
  }

  onDelete(form:NgForm,MemberId)
  {
      this.deleteRecord(form,MemberId); 
  }
  deleteRecord(form:NgForm,MemberId){
    if(confirm('Are you sure you want to delete this Attendance ?'))
    {
      this.objM.deleteMembers(MemberId).subscribe(res=>{this.objM.getMembers()},err=>{alert('Error Occured '+err);})
    }
  
    // this.objM.deleteMembers(MemberId).subscribe(res=>{this.resetForm(form);
    //   this.objM.getMembers();alert('Member Deleted Successfully');},err=>{alert('Error !!!'+err);})
  }

  selectDiv(divNumber: number) {
    if (this.selectedDiv === divNumber) {
      // If the clicked div is already selected, unselect it and hide it
      this.selectedDiv = null;
    } else {
      // Otherwise, show the clicked div and select it while unselecting others
      this.selectedDiv = divNumber;
    }
  }
  

  toggleNav() {
    const nav = document.querySelector('.navcontainer');

    if (nav) {
      this.renderer.addClass(nav, 'navclose');
    }
  }
}