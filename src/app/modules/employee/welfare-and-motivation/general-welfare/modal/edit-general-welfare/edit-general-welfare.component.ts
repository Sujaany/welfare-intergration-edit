import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IndividualWelfare } from '../../../Model/individual-welfare';
import { IndividualWelfareService } from '../../../Service/individual-welfare.service';

@Component({
  selector: 'app-edit-general-welfare',
  templateUrl: './edit-general-welfare.component.html',
  styleUrls: ['./edit-general-welfare.component.css']
})
export class EditGeneralWelfareComponent implements OnInit {

  
  IndividualWelfareObj =new IndividualWelfare
  IndividualWelfare: IndividualWelfare[];
  msg:any;
  
  editgeneralWelfare: FormGroup;
  constructor(private individualWelfareService:IndividualWelfareService) {
    this.editgeneralWelfare = new FormGroup({
      'wid' : new FormControl,
      'editgfName':new FormControl,
      'editalloName':new FormControl
      
    })
  }

  ngOnInit() {
  }

  getIndividualWelfare(){
    this.individualWelfareService.getIndividualWelfare().subscribe(data=>{
      this.IndividualWelfare=data;
    });

  }
}