import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewRecordOfEmploymentService } from '../../view-profile-info/view-record-of-employment/view-record-of-employment.service';
import { ViewRecordOfEmployment } from '../../view-profile-info/view-record-of-employment/view-record-of-employment.model';

@Component({
  selector: 'app-add-record-of-employment',
  templateUrl: './add-record-of-employment.component.html',
  styleUrls: ['./add-record-of-employment.component.css']
})
export class RecordOfEmploymentComponent implements OnInit {
  recordObj:ViewRecordOfEmployment=new ViewRecordOfEmployment()
  constructor(private router: Router,
    private recordOfEmployeeService:ViewRecordOfEmploymentService
    ) { }

  ngOnInit() {
  }
  addRecordOfEmployeeMent(){
    return this.recordOfEmployeeService.addRecordOfEmployement(this.recordObj).subscribe(data=>{
      this.recordObj=data;
      this. clear();
    })
  }

  clear() {
    this.recordObj.workName= null;
    this.recordObj.periodYearTo = null;
    this.recordObj.periodYearFrom = null;
    this.recordObj.designation = null;
    this.recordObj.workType = null;
    this.recordObj.reasonForLeaving = null;
    this.recordObj.leavingSalary = null;
    this.recordObj.workPlace = null;
    

  }

  previous() {
    this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/referees']);
  }

}
