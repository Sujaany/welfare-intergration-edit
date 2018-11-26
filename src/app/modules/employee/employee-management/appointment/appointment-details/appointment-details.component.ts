import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AppoinmentDetailsService } from './appoinment-details.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})




export class AppointmentDetailsComponent implements OnInit {

  constructor(private router:Router,private appointmentService:AppoinmentDetailsService) { }
  appointmentObj=new Appointment();
  appointmentDetails:Appointment[];
  ngOnInit() {
   this. GetAppointmentDetails();
  }

  CreateAppointmentDetails(){
    this.appointmentService.AddAppointmentDetails(this.appointmentObj).subscribe(data=>{
      this.appointmentObj=data;
    })
  }

  GetAppointmentDetails(){
    this.appointmentService.viewAppointmentDetails().subscribe(data=>{
      console.log(data);
      this.appointmentDetails=data;
     } )
  }
  

}
