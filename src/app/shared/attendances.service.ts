import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Attendances } from './attendances.model';

 @Injectable({
  providedIn: 'root'
})
export class AttendancesService {
  constructor(private objhttp:HttpClient){ }
attendanceUrl='https://localhost:5001/api/attendances';
attendanceList:Attendances[];
attendanceData:Attendances=new Attendances();

postAttendance()
{
  return this.objhttp.post(this.attendanceUrl,this.attendanceData);
}

updateAttendance()
{
  return this.objhttp.put(`${this.attendanceUrl}/${this.attendanceData.AttendanceId}` ,this.attendanceData);
}
getAttendance()
{
  this.objhttp.get(this.attendanceUrl).toPromise().then(res=>this.attendanceList =res as Attendances[]);
// return this.objhttp.get<Trainers[]>(this.trainersUrl);
}
deleteAttendance(AttendanceId:number)
{
  return this.objhttp.delete(`${this.attendanceUrl}/${AttendanceId}`);
}
}