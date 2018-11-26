import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereesService } from '../../view-profile-info/view-referees/referees.service';
import { Referee } from '../../view-profile-info/view-referees/referee.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';

@Component({
  selector: 'app-add-referees',
  templateUrl: './add-referees.component.html',
  styleUrls: ['./add-referees.component.css']
})
export class RefereesComponent implements OnInit {
  refObj:Referee=new Referee();
  constructor(private router: Router,
    private refereeService:RefereesService,
    private generalService:ProfileInfoService
    ) { }

  ngOnInit() {
  }
  addReferee(){
    return this.refereeService.addReferee(this.refObj).subscribe(data=>{
      this.refObj=data;
      this.next();
    })
  }
  
  previous() {
    this.router.navigate(['/appointment/appointmentInformation/recordOfEmp']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/attachment']);
  }

}
