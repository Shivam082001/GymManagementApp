import { Injectable } from '@angular/core';
import { Classes } from './classes.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

 @Injectable({
  providedIn: 'root'
})
export class ClassesService {
  constructor(private objhttp:HttpClient){ }
classesUrl='https://localhost:5001/api/classes';
listClasses:Classes[];
classesData:Classes=new Classes();

postClasses()
{
  return this.objhttp.post(this.classesUrl,this.classesData);
}

updateClasses()
{
  return this.objhttp.put(`${this.classesUrl}/${this.classesData.ClassId}` ,this.classesData);
}
getClasses()
{
  this.objhttp.get(this.classesUrl).toPromise().then(res=>this.listClasses =res as Classes[]);
// return this.objhttp.get<Trainers[]>(this.trainersUrl);
}
deleteClasses(ClassId:number)
{
  return this.objhttp.delete('$(this.classesUrl}/$(ClassId}');
}
}