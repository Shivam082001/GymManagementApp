import { Component,OnInit } from '@angular/core';
import { AttendancesService } from 'src/app/shared/attendances.service';
import { Attendances } from 'src/app/shared/attendances.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit{
  
  constructor(public objService:AttendancesService){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null){form.form.reset();}
    else{this.objService.attendanceData={AttendanceId:0,MemberId:0,ClassId:0,AttendanceDate:''}}
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
    this.objService.postAttendance().subscribe(res=>{this.resetForm(form);
      this.objService.getAttendance();alert('Attendance Registered Successfully');},err=>{alert('Error !!!'+err);})
  }
  updateRecord(form:NgForm){
    this.objService.updateAttendance().subscribe(res=>{this.resetForm(form);
      this.objService.getAttendance();alert('Attendance Updated Successfully');},err=>{alert('Error !!!'+err);})
  }
}