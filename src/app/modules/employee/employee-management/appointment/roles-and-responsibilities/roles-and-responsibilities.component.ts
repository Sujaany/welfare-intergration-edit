import { Component, OnInit } from '@angular/core';
import { RolesAndResponsibilitiesService } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities.service';
import { RolesAndResponsibilities } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities';

@Component({
  selector: 'app-roles-and-responsibilities',
  templateUrl: './roles-and-responsibilities.component.html',
  styleUrls: ['./roles-and-responsibilities.component.css']
})
export class RolesAndResponsibilitiesComponent implements OnInit {
  rolesandResObj:RolesAndResponsibilities=new RolesAndResponsibilities
  constructor(private rolesandResponsibilityService:RolesAndResponsibilitiesService) { }

  ngOnInit() {
  }
  addRolesAndResponsibilities(){
    return this.rolesandResponsibilityService.addRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
      this.rolesandResObj=data;
    })
  }

}
