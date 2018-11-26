import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { IndividualWelfareService } from '../Service/individual-welfare.service';
import { IndividualWelfare } from '../Model/individual-welfare';

@Component({
  selector: 'app-indivual-welfare',
  templateUrl: './indivual-welfare.component.html',
  styleUrls: ['./indivual-welfare.component.css']
})
export class IndivualWelfareComponent implements OnInit {

  IndividualWelfareObj =new IndividualWelfare
  IndividualWelfare: IndividualWelfare[];
  msg:any;

  displayedColumns: string[] = ['id', 'name','allowance','amount','edit/delete'];

  individualwelfare = [
    { 'id':'1', 'name':'John', 'allowance':'Medical Allowance','amount':'5000.00', 'edit/delete':'' },
    { 'id':'2', 'name':'Peris', 'allowance':'Travalling Allowance','amount':'3000.00', 'edit/delete':'' },
    
  ]
  dataSource = new MatTableDataSource<any>(this.individualwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private individualWelfareService:IndividualWelfareService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.individualwelfare);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getIndividualWelfare();


  }
  getIndividualWelfare(){
    this.individualWelfareService.getIndividualWelfare().subscribe(data=>{
      this.IndividualWelfare=data;
    });

  }
  createIndividualWelfare(){
    this.individualWelfareService.createIndividualWelfare(this.IndividualWelfareObj).subscribe(data=>{
       this.getIndividualWelfare();
    });

  }

  // getIndividualWelfareID(abc
  //   this.IndividualWelfareObj=Object.assign({},abc);
  //   console.log(this.IndividualWelfareObj);
  // }
  updateIndividualWelfare(){
    this.individualWelfareService.updateIndividualWelfare(this.IndividualWelfareObj).subscribe(data=>{
      
      
      this.getIndividualWelfare();
    })

  }
  deleteindividualWelfare(){
    this.individualWelfareService.deleteIndividualWelfare(this.IndividualWelfareObj).subscribe(data=>{
     
      this.getIndividualWelfare();
    });

  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }


  }

}

