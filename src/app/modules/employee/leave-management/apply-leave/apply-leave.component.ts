import { LeaveType } from './../../../../models/leave-management/leave-type';
import { LeaveTypeService } from './../../../../services/leave-management/leave-type.service';
import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private leaveRequestService: LeaveRequestService, private leaveTypeService: LeaveTypeService) { }

  leaveRequest = new LeaveRequest();
  leaveType : LeaveType[];

  ngOnInit() {
    this.leaveRequest.noOfDays = 0;
    this.getLeaveType();
  }

  createLeaveRequest() {
    this.leaveRequest.userName = "user";
    this.leaveRequestService.addLeaveRequest(this.leaveRequest).subscribe(data => {
      this.clearAfterAdd();
      console.log(data);
    })
  }

  clearAfterAdd() {
    this.leaveRequest.reason = null;
    this.leaveRequest.leaveType.id = null;
    this.leaveRequest.startDate = null;
    this.leaveRequest.endDate = null;
    this.leaveRequest.attachment = null;
    this.leaveRequest.userName = null;
    this.leaveRequest.noOfDays = 0;
  }

  getLeaveType() {
    this.leaveTypeService.getAllLeaveTypes().subscribe(data => {
      this.leaveType = data;
      console.log(this.leaveType);
    })
  }

  noOfDays(){
    var time = new Date(this.leaveRequest.endDate).getTime() - new Date(this.leaveRequest.startDate).getTime();
     this.leaveRequest.noOfDays = time / (1000 * 60 * 60 * 24) + 1;
  }
}
