import { Component, OnInit } from '@angular/core';
import { TrainersService } from 'src/app/shared/trainers.service';
import { Trainers } from 'src/app/shared/trainers.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(public objService: TrainersService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {form.form.reset();}
    else {
    this.objService.trainerData = {
      TrainerId: '',
      FirstName: '',
      LastName: '',
      DateOfBirth: null,
      Gender: '',
      ContactNumber: '',
      Email: '',
      HireDate: null,
      Specialization: ''
    }
    }
  }

  onSubmit(form: NgForm) {
     {
      this.insertRecord(form);
    }
  }
  onUpdate(form:NgForm){
    {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.objService.saveTrainer().subscribe(
      res => {
        this.resetForm(form);
        this.objService.getTrainers();
        alert('Trainer Registered Successfully');
      },
      err => { alert('Error !!! ' + err); }
    )
  }

  updateRecord(form: NgForm) {
    this.objService.updateTrainer().subscribe(
      res => {
        this.resetForm(form);
        this.objService.getTrainers();
        alert('Trainer Updated Successfully');
      },
      err => { alert('Error !!! ' + err); }
    )
  }
}