import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';

@Component({
  selector: 'app-record-applicant-cv',
  templateUrl: './record-applicant-cv.component.html',
  styleUrls: ['./record-applicant-cv.component.css']
})
export class RecordApplicantCvComponent implements OnInit {
  recordOfApplicantObj:RecordApplicantCv;
  recordOfApplicantAdd:RecordApplicantCv[];
  recordOfApplicantEdit:RecordApplicantCv;
  constructor(private recordApplicantCvService:RecordApplicantCvService) { 

    
  }

  ngOnInit() {

  }
  addApplicantCv(){
    this.recordApplicantCvService.postUser(this.recordOfApplicantObj).subscribe(addRecordOfApplicant=>{
     console.log(addRecordOfApplicant);
    });
    
  }

}
