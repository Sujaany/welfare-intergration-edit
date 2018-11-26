import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { HighestQualification } from '../Modal/highest-qualification';
import { HighestQualificationService } from '../Service/highest-qualification.service';

@Component({
  selector: 'app-view-highest-qualification',
  templateUrl: './view-highest-qualification.component.html',
  styleUrls: ['./view-highest-qualification.component.css']
})
export class ViewHighestQualificationComponent implements OnInit {
  highestQualification :HighestQualification[];
  msg:any;
  displayedColumns: string[] = ['h_id','h_type','h_button'];

 
  dataSource = new MatTableDataSource<any>(this.highestQualification);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private highestQualificationService:HighestQualificationService) { }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<any>(this.highestQualification);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getAllHighestQualification();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllHighestQualification() {
    this.highestQualificationService.getAllHighestQualification().subscribe(data => {
    this.highestQualification = data;
    this.dataSource = new MatTableDataSource<any>(this.highestQualification);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(data);
    });
}
}