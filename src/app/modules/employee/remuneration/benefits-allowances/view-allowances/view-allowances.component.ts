import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewBenefitsAllowancesService } from '../../Service/view-benefits-allowances.service';
import { ViewBenefitsAllowances } from '../../Model/view-benefits-allowances';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-view-allowances',
  templateUrl: './view-allowances.component.html',
  styleUrls: ['./view-allowances.component.css']
})
export class ViewAllowancesComponent implements OnInit {

  dataSource = new BenefitsAllowancesDataSource(this.viewBenefitsAllowancesService);
  displayedColumns: string[] = ['id','name','deptName', 'travelling','meal','housing','mobile','medical'];

  // appoinments = [
  //   { 'empNo':'1', 'empname':'Harry','depname':'HR', 'travelling':'HR', 'meal' :'test1', 'housing':'1561', 'mobile':'jhbj', 'medical':'15414'},
  //   { 'empNo':'2', 'empname':'Potter', 'depname':'Finance','travelling':'HR', 'meal' :'test1', 'housing':'1561', 'mobile':'jhbj', 'medical':'15414'},
  //   { 'empNo':'3', 'empname':'Peetor', 'depname':'Account','travelling':'HR', 'meal' :'test1', 'housing':'1561', 'mobile':'jhbj', 'medical':'15414'},
  //   { 'empNo':'4', 'empname':'Thattor', 'depname':'Fire','travelling':'HR', 'meal' :'test1', 'housing':'1561', 'mobile':'jhbj', 'medical':'15414'},
  //   { 'empNo':'5', 'empname':'Mottor', 'depname':'HR','travelling':'HR', 'meal' :'test1', 'housing':'1561', 'mobile':'jhbj', 'medical':'15414'},
  //   { 'empNo':'6', 'empname':'Settor', 'depname':'HR','travelling':'HR', 'meal' :'test1', 'housing':'1561', 'mobile':'jhbj', 'medical':'15414'},
  //   { 'empNo':'7', 'empname':'Kettor', 'depname':'HR','travelling':'HR', 'meal' :'test1', 'housing':'1561', 'mobile':'jhbj', 'medical':'15414'}
  // ]
  // dataSource = new MatTableDataSource<any>(this.appoinments);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private viewBenefitsAllowancesService:ViewBenefitsAllowancesService ) { }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<any>(this.appoinments);
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
export class BenefitsAllowancesDataSource extends DataSource<any>{
  constructor(private viewBenefitsAllowancesService: ViewBenefitsAllowancesService) {
    super();
}
connect(): Observable<ViewBenefitsAllowances[]>{
return this.viewBenefitsAllowancesService.getBenefitsAllowances();
}
disconnect() {}
}
