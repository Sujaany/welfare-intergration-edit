import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AddDeniedPromotion } from '../models/add-denied-promotion';
import { AddDeniedPromotionService } from '../services/add-denied-promotion.service';


@Component({
  selector: 'app-promotion-denied-history',
  templateUrl: './promotion-denied-history.component.html',
  styleUrls: ['./promotion-denied-history.component.css']
})
export class PromotionDeniedHistoryComponent implements OnInit {

    addDeniedPromotion :AddDeniedPromotion[];
    msg: any;

  displayedColumns: string[] = ['deniedID', 'reqID','DesignID', 'position','denieddate','deniedremark','deniedBy','edit/delete'];


  //Creditcheck : any;

  dataSource = new MatTableDataSource<any>(this.addDeniedPromotion);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private addDeniedPromotionService: AddDeniedPromotionService) { }

  ngOnInit() {
    this.getPromotionDeniedHistory();
    
    
  }

  getPromotionDeniedHistory(){
    this.addDeniedPromotionService.getAllDeniedPromotion().subscribe(data=>{
    this.addDeniedPromotion = data;
    this.dataSource = new MatTableDataSource<any>(this.addDeniedPromotion);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(data);
    });
  }

 


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}