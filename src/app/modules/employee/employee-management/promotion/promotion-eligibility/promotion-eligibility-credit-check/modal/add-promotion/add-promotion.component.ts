import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { AddPromotion } from '../../../../models/add-promotion';
import { AddPromotionService } from '../../../../Services/add-promotion.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {

  addPromotionObj = new AddPromotion();
  addPromotion : AddPromotion[];
  msg: any;

  //insertpromation: FormGroup;
  constructor(private addPromotionService : AddPromotionService) {
 // this.insertpromation = new FormGroup({
    // 'proId': new FormControl,
    // 'reqId': new FormControl,
    // 'resigId':new FormControl,
    // 'positionname': new FormControl,
    // 'promoteddate': new FormControl,
    // 'salary': new FormControl,
    // 'promotionremark': new FormControl,
    // 'proBy':new FormControl
    
    

  //})
  }

  ngOnInit() {
    this.getAddPromotion();
  }

  getAddPromotion() {
    this.addPromotionService.getAddPromotion().subscribe(data => {
      this.addPromotion = data;
      console.log(data);
    });
  }

  createAddPromotion() {
   
    this.addPromotionService.createAddPromotion(this.addPromotionObj).subscribe(data => {
      console.log(data);
    });

  }
  

}
