import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassesService } from 'src/app/shared/classes.service'; 
import { Classes } from 'src/app/shared/classes.model';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(public classService: ClassesService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {form.form.reset();}
    else {
    this.classService.classesData = {
    ClassId:0,
    ClassName:'',
    Description:'',
    Schedule:'',
    TrainerId:'',
    MaxCapacity:'',
    Attendances:'',
    Trainer:'',
    }
    }
  }

  onSubmit(form: NgForm)
    {
   this.insertRecord(form);
    }
  
  onUpdate(form: NgForm) {
   this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.classService.postClasses().subscribe(
      res => {
        this.resetForm(form);
        this.classService.getClasses();
        alert('Class Registered Successfully');
      },
      err => { alert('Error !!! ' + err); }
    )
  }

  updateRecord(form: NgForm) {
    this.classService.updateClasses().subscribe(
      res => {
        this.resetForm(form);
        this.classService.getClasses();
        alert('Class Updated Successfully');
      },
      err => { alert('Error !!! ' + err); }
    )
  }

}