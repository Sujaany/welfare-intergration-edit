import { Component, OnInit } from '@angular/core';
import { ProfessionalQualificationService } from '../../view-profile-info/view-professional-qualification/professional-qualification.service';
import { ProfessionalQualification } from '../../view-profile-info/view-professional-qualification/professional-qualification.model';

@Component({
  selector: 'app-form-university',
  templateUrl: './form-university.component.html',
  styleUrls: ['./form-university.component.css']
})
export class FormUniversityComponent implements OnInit {
  profesionalObj:ProfessionalQualification=new ProfessionalQualification();
  constructor(
    private professionalQualificationService:ProfessionalQualificationService) { }

  ngOnInit() {
   
  }

  addEmpProQualification(){
    this.profesionalObj.userId=1;
    return this.professionalQualificationService.createEmpProQualification(this.profesionalObj).subscribe(data=>{
      console.log(data);
      // alert("added");
      this.clear() 
      
    })
  }
  clear() {
    this.profesionalObj.courseName= null;
    this.profesionalObj.periodYearTo = null;
    this.profesionalObj.periodYearFrom = null;
    this.profesionalObj.result = null;
    this.profesionalObj.gpa = null;
    

  }


 
}
