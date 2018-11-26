import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { GeneralWelfareService } from '../Service/general-welfare.service';
import { GeneralWelfare } from '../Model/general-welfare';

@Component({
  selector: 'app-general-welfare',
  templateUrl: './general-welfare.component.html',
  styleUrls: ['./general-welfare.component.css']
})
export class GeneralWelfareComponent implements OnInit {

  GeneralWelfareObj =new GeneralWelfare
  GeneralWelfare: GeneralWelfare[];
  msg:any;

  displayedColumns: string[] = ['id', 'name','allocationdetails','edit/delete'];

  generalwelfare = [
    { 'id':'1', 'name':'Common seminar', 'allocationdetails':'for all employees', 'edit/delete':'' },
  
    
  ]
  dataSource = new MatTableDataSource<any>(this.generalwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  getgeneralWelfare: any;
  

  constructor(private generalWelfareService:GeneralWelfareService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.generalwelfare);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getgeneralWelfare();
  }
  getGeneralWelfare(): any {
    throw new Error("Method not implemented.");
  }

  getCareerDevPlan(){
    this.generalWelfareService.getGeneralWelfare().subscribe(data=>{
      this.GeneralWelfare=data;
    });

  }
  createCareerDevPlan(){
    this.generalWelfareService.createGeneralWelfare(this.GeneralWelfareObj).subscribe(data=>{
       this.getCareerDevPlan();
    });

  }

  getCareerDevPlanID(abc){
    
    this.GeneralWelfareObj=Object.assign({},abc);
console.log(this.GeneralWelfareObj);
  }



  updateCareerDevPlan(){
    this.generalWelfareService.updateGeneralWelfare(this.GeneralWelfareObj).subscribe(data=>{
      
      
      this.getCareerDevPlan();
    })

  }
  deleteGeneralWelfare(){
    this.generalWelfareService.deleteGeneralWelfare(this.GeneralWelfareObj).subscribe(data=>{
     
      this.getCareerDevPlan();
    });

  }
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

