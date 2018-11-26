import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {ViewEmpSalaryChartService} from '../../Service/view-emp-salary-chart.service';
import {ViewEmpSalaryChart} from '../../Model/view-emp-salary-chart';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-salary-chart',
  templateUrl: './view-salary-chart.component.html',
  styleUrls: ['./view-salary-chart.component.css']
})
export class ViewSalaryChartComponent implements OnInit {

  dataSource = new SalaryChartDataSource(this.viewEmpSalaryChartService);
  displayedColumns: string[] = ['id','basicSalary','empName','epf','loan','netSalary','payee','stampDuty','statutoryPayment'];
   constructor( private viewEmpSalaryChartService: ViewEmpSalaryChartService) { }

  // displayedColumns: string[] = [ 'employeeNo','name','basicSalary','epf8','paye','stampDuty','advance','loan','netSalary','epf12','etf3','satutoryPayment'];

  // appoinments = [
  //   { 'name':'sam', 'employeeNo':'1', 'basicSalary':'#salary', 'epf8' :'#epf8', 'paye':'#payee', 'stampDuty':'#', 'advance':'#', 'loan':'#', 'netSalary':'#', 'epf12':'#', 'etf3':'##', 'satutoryPayment':'###'},
  //   { 'name':'john', 'employeeNo':'2', 'basicSalary':'#salary', 'epf8' :'#epf8', 'paye':'#payee', 'stampDuty':'#', 'advance':'#', 'loan':'#', 'netSalary':'#', 'epf12':'#', 'etf3':'##', 'satutoryPayment':'###'},
  //   { 'name':'peter', 'employeeNo':'3', 'basicSalary':'#salary', 'epf8' :'#epf8', 'paye':'#payee', 'stampDuty':'#', 'advance':'#', 'loan':'#', 'netSalary':'#', 'epf12':'#', 'etf3':'##', 'satutoryPayment':'###'},
  //   { 'name':'albus', 'employeeNo':'4', 'basicSalary':'#salary', 'epf8' :'#epf8', 'paye':'#payee', 'stampDuty':'#', 'advance':'#', 'loan':'#', 'netSalary':'#', 'epf12':'#', 'etf3':'##', 'satutoryPayment':'###'},
  //   { 'name':'croos', 'employeeNo':'5', 'basicSalary':'#salary', 'epf8' :'#epf8', 'paye':'#payee', 'stampDuty':'#', 'advance':'#', 'loan':'#', 'netSalary':'#', 'epf12':'#', 'etf3':'##', 'satutoryPayment':'###'},
  //   { 'name':'mike', 'employeeNo':'6', 'basicSalary':'#salary', 'epf8' :'#epf8', 'paye':'#payee', 'stampDuty':'#', 'advance':'#', 'loan':'#', 'netSalary':'#', 'epf12':'#', 'etf3':'##', 'satutoryPayment':'###'}
  
  // ]
  // dataSource = new MatTableDataSource<any>(this.appoinments);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  

  ngOnInit() {
  //   this.dataSource = new MatTableDataSource<any>(this.appoinments);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
  export class SalaryChartDataSource extends DataSource<any>{
    constructor(private viewEmpSalaryChartService: ViewEmpSalaryChartService) {
      super();
  }
  connect(): Observable<ViewEmpSalaryChart[]>{
  return this.viewEmpSalaryChartService.getSalaryChart();
  }
  disconnect() {}
}
