import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { UserLoanDetailsService } from '../../Service/user-loan-details.service';
import { Observable } from 'rxjs';
import { UserLoanDetails } from '../../Model/user-loan-details';

@Component({
  selector: 'app-taken-view-by-hr',
  templateUrl: './taken-view-by-hr.component.html',
  styleUrls: ['./taken-view-by-hr.component.css']
})
export class TakenViewByHrComponent implements OnInit {
  displayedColumns: string[] = ['user_id','user', 'dateOfLoanObtained', 'loanDetailsEntity','installmentDate', 'installmentAmount', 'redemptionDate'];

  dataSource = new UserLoanDetailsDataSource(this.userLoanDetailsService);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userLoanDetailsService: UserLoanDetailsService) { }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<any>(this.loantakenby);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}

export class UserLoanDetailsDataSource extends DataSource<any>{
  constructor(private userLoanDetailsService: UserLoanDetailsService){
    super();
  }
  connect():Observable<UserLoanDetails[]>{
    return this.userLoanDetailsService.getUserLoanDetails();
  }
  disconnect(){}
}
