import { Injectable } from '@angular/core';
import {Trainers} from './trainers.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

 @Injectable({
  providedIn: 'root'
})
export class TrainersService {
  constructor(private objhttp:HttpClient){ }
trainersUrl='https://localhost:5001/api/trainers';
listTrainers:Trainers[];
trainerData:Trainers=new Trainers();

saveTrainer()
{
  return this.objhttp.post(this.trainersUrl,this.trainerData);
}

updateTrainer()
{
  return this.objhttp.put(`${this.trainersUrl}/${this.trainerData.TrainerId}` ,this.trainerData);
}
getTrainers()
{
  this.objhttp.get(this.trainersUrl).toPromise().then(res=>this.listTrainers =res as Trainers[]);
// return this.objhttp.get<Trainers[]>(this.trainersUrl);
}
deleteTrainer(TrainerId:number)
{
  return this.objhttp.delete('$(this.trainersUrl}/$(TrainerId}');
}
}