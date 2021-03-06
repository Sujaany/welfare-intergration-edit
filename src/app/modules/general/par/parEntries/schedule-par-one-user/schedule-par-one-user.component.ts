import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ParconfigService } from '../../services/parconfig.service';
import { ParConfig } from '../../models/par-config.model';
import { SchedulePar } from '../../models/schedule-par.model';
import { ScheduleParAppraisors } from '../../models/schedule-par-appraisors.model';
import { ScheduleParContent } from '../../models/schedule-par-content.model';
import { ParAppraisorService } from '../../services/par-appraisor.service';
import { ParAppraisor } from '../../models/par-appraisor.model';
import { ScheduleParService } from '../../services/schedule-par.service';

@Component({
  selector: 'app-schedule-par-one-user',
  templateUrl: './schedule-par-one-user.component.html',
  styleUrls: ['./schedule-par-one-user.component.css']
})
export class ScheduleParOneUserComponent implements OnInit {

  scheduleParObj: SchedulePar = new SchedulePar();
  parConfigArray: ParConfig[];
  parAppraisorArray: ParAppraisor[];

  // objApp1:ScheduleParAppraisors=new ;
  // objApp2:ScheduleParAppraisors=new ScheduleParAppraisors();


  firstFormGroup: FormGroup = new FormGroup({
    parId: new FormControl(),
    empId: new FormControl(),
    parDate: new FormControl(),
    parTime: new FormControl(),

  });


  constructor(
    private parConfigService: ParconfigService,
    private parAppraisorService: ParAppraisorService,
    private scheduleParService:ScheduleParService
  ) { }

  getAppraisorsdata() {
    this.parAppraisorService.getParAppraisor().subscribe(data => {
      console.log(data);
      this.parAppraisorArray = data;
    })
  }



  ngOnInit() {

    this.parConfigService.getParConfig().subscribe(data => {
      this.parConfigArray = data;
    })
    this.getAppraisorsdata();
  }

  getFormData() {
    this.scheduleParObj.id = this.firstFormGroup.value.parId;
    this.scheduleParObj.empId = this.firstFormGroup.value.empId;
    this.scheduleParObj.scheduleDate = new Date(this.firstFormGroup.value.parDate);
  }

  pushEmp() {
    this.scheduleParObj.id = this.firstFormGroup.value.parId;
    this.scheduleParObj.empId = this.firstFormGroup.value.empId;
    this.scheduleParObj.scheduleDate = new Date(this.firstFormGroup.value.parDate);
  }

  contentListPush() {
    this.scheduleParObj.scheduleParContentList = [];
    for (let parConfig of this.parConfigArray) {
      if (parConfig.isActive == true) {
        this.scheduleParObj.scheduleParContentList.push(new ScheduleParContent(parConfig.id))
      }
    }
  }

  appraisorsListPush() {
    this.scheduleParObj.scheduleParAppraisorsList = [];
    for (let parAppraisor of this.parAppraisorArray) {
      if (parAppraisor.isActive == true) {
        this.scheduleParObj.scheduleParAppraisorsList.push(new ScheduleParAppraisors(parAppraisor.id))
      }
    }
  }

  schedulePar(){
  
    console.log(this.scheduleParObj)
    this.scheduleParService.addSchedulePar(this.scheduleParObj).subscribe(data=>{
      alert("ok")
    })
  }
}
