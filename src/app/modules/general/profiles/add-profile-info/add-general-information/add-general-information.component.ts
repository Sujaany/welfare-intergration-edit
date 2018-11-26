import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';

@Component({
  selector: 'app-add-general-information',
  templateUrl: './add-general-information.component.html',
  styleUrls: ['./add-general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  proObj:Profile=new Profile();
  constructor(private router: Router, private profileser:ProfileInfoService) { }

  ngOnInit() {
   
  }
  

  addProfileGeneralInfo(){
    return this.profileser.addGeneralInfo(this.proObj).subscribe(data=>{
      console.log(data);
      alert("added")
      this.next();
    })
  }
  next() {
    this.router.navigate(['/appointment/appointmentInformation/academicInfo']);
  }
}
