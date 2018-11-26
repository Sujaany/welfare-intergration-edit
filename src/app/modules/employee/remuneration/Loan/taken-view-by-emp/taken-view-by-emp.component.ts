import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-taken-view-by-emp',
  templateUrl: './taken-view-by-emp.component.html',
  styleUrls: ['./taken-view-by-emp.component.css']
})
export class TakenViewByEmpComponent implements OnInit {

  displayedColumns: string[] = ['dateOfLoanObtained', 'amountOfLoanObtained', 'installmentDate', 'installmentAmount', 'redemptionDate'];

  loantaken = [
    { 'dateOfLoanObtained': '2018/01/12', 'amountOfLoanObtained': 'EmpLoan', 'installmentDate': '2018/01/12', 'installmentAmount': '5000', "redemptionDate": "2019/01/12" },
    { 'dateOfLoanObtained': '2018/01/12', 'amountOfLoanObtained': 'HRLoan', 'installmentDate': '2018/01/12', 'installmentAmount': '6000', "redemptionDate": "2019/01/12" },
    { 'dateOfLoanObtained': '2018/01/12', 'amountOfLoanObtained': 'ManagerLoan','installmentDate': '2018/01/12', 'installmentAmount': '7000',"redemptionDate": "2019/01/12"},
    { 'dateOfLoanObtained': '2018/01/12', 'amountOfLoanObtained': 'Manager', 'installmentDate': '2018/01/12', 'installmentAmount': '6000', "redemptionDate": "2019/01/12" },
    { 'dateOfLoanObtained': '2018/01/12', 'amountOfLoanObtained': 'Manager', 'installmentDate': '2018/01/12', 'installmentAmount': '4000', "redemptionDate": "2019/01/12" },
    { 'dateOfLoanObtained': '2018/01/12', 'amountOfLoanObtained': 'Manager', 'installmentDate': '2018/01/12', 'installmentAmount': '5500', "redemptionDate": "2019/01/12" },
    { 'dateOfLoanObtained': '2018/01/12', 'amountOfLoanObtained': 'Manager', 'installmentDate': '2018/01/12', 'installmentAmount': '4500', "redemptionDate": "2019/01/12" }
  ]
  dataSource = new MatTableDataSource<any>(this.loantaken);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.loantaken);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
