import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfServiceComponent } from './self-service.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { AddIndividualsComplainsComponent } from './add-individuals-complains/add-individuals-complains.component';
import { ViewIndividualsComplainsComponent } from './view-individuals-complains/view-individuals-complains.component';
import { ViewIndividualsComplainsHistoryComponent } from './view-individuals-complains-history/view-individuals-complains-history.component';
import { ViewAllComplainHistoryComponent } from './view-all-complain-history/view-all-complain-history.component';
import { ViewResponseComponent } from './view-response/view-response.component';
import { RejectServiceComponent } from './view-individuals-complains/modal/reject-service/reject-service.component';

const routes:Routes=[
  {
  path:'',
  component:SelfServiceComponent,
  children:[
    {
      path: 'addIndividualComplaint',
      component: AddIndividualsComplainsComponent
    },
    {
      path: 'viewIndividualComplaint',
      component: ViewIndividualsComplainsComponent
    },
    {
      path: 'viewAllComplainHistory',
      component: ViewAllComplainHistoryComponent
    },
    {
      path: 'viewIndividualComplainHistory',
      component: ViewIndividualsComplainsHistoryComponent
    },
    {
      path: 'viewResponse',
      component: ViewResponseComponent
    },
  ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SelfServiceComponent, 
    AddIndividualsComplainsComponent, 
    ViewIndividualsComplainsComponent, 
    ViewIndividualsComplainsHistoryComponent, 
    ViewAllComplainHistoryComponent,
    ViewResponseComponent,
    RejectServiceComponent    
  ]
})
export class SelfServiceModule { }
