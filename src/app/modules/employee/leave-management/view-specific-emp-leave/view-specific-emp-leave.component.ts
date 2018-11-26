import { LeaveManagementInteractionService } from './../interaction-service/leave-management-interaction.service';
import { InteractionService } from './../../../../services/interaction.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-specific-emp-leave',
  templateUrl: './view-specific-emp-leave.component.html',
  styleUrls: ['./view-specific-emp-leave.component.css']
})
export class ViewSpecificEmpLeaveComponent implements OnInit {

  displayedColumns: string[] = ['typeOfLeave', 'appliedOn','acceptedOrRejected','takenOn','reason','noOfDays','allocated','balance'];

  specificLeaveDetails = [
    {'typeOfLeave':'Casual', 'appliedOn':'2018/10/12','acceptedOrRejected':'Accepted','takenOn':'2018/10/13','reason':'Wedding','noOfDays':'3','allocated':'7','balance':'4'},
    {'typeOfLeave':'Casual', 'appliedOn':'2018/10/12','acceptedOrRejected':'Accepted','takenOn':'2018/10/13','reason':'Wedding','noOfDays':'3','allocated':'7','balance':'4'},
    {'typeOfLeave':'Casual', 'appliedOn':'2018/10/12','acceptedOrRejected':'Accepted','takenOn':'2018/10/13','reason':'Wedding','noOfDays':'3','allocated':'7','balance':'4'},
    {'typeOfLeave':'Casual', 'appliedOn':'2018/10/12','acceptedOrRejected':'Accepted','takenOn':'2018/10/13','reason':'Wedding','noOfDays':'3','allocated':'7','balance':'4'},
    {'typeOfLeave':'Casual', 'appliedOn':'2018/10/12','acceptedOrRejected':'Accepted','takenOn':'2018/10/13','reason':'Wedding','noOfDays':'3','allocated':'7','balance':'4'},
    {'typeOfLeave':'Casual', 'appliedOn':'2018/10/12','acceptedOrRejected':'Accepted','takenOn':'2018/10/13','reason':'Wedding','noOfDays':'3','allocated':'7','balance':'5'}
  ]

  dataSource = new MatTableDataSource<any>(this.specificLeaveDetails);
  userId: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private interactionService: LeaveManagementInteractionService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.specificLeaveDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUserId();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUserId(){
    this.interactionService.userId$.subscribe(data=>{
      this.userId = data;
      console.log(this.userId);
    })

  }
}