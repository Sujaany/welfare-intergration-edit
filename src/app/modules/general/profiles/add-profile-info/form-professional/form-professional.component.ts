import { Component, OnInit } from '@angular/core';
import { ProfessionalQualification } from '../../view-profile-info/view-professional-qualification/professional-qualification.model';
import { ProfessionalQualificationService } from '../../view-profile-info/view-professional-qualification/professional-qualification.service';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.css']
})
export class FormProfessionalComponent implements OnInit {
  
profesionalObj:ProfessionalQualification=new ProfessionalQualification();

  constructor( private professionalQualificationService:ProfessionalQualificationService) { }

  ngOnInit() {
  }
  addEmpProQualification(){
    alert("jhdvjzsdghsa");
    return this.professionalQualificationService.createEmpProQualification(this.profesionalObj).subscribe(data=>{
      console.log(data);
      alert("sFASFA");
    })
  }
}
