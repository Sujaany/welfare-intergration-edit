import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicQualificationService } from './academic-qualification.service';
import { AcademicQualification } from './academic-qualification.model';

@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {

  constructor(private router:Router,private academicService:AcademicQualificationService) { }
  academicObj:AcademicQualification=new AcademicQualification();
 

  previous() {
    this.router.navigate(['/appointment/appointmentInformation/generalInfo']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
  }

  ngOnInit() {
    
  }
    createAcademicQualification(){
      this.academicService.addAcademicQualification(this.academicObj)
      .subscribe(data=>{
        console.log(data);
        alert("created");
        this.next();
      })
    }
}
