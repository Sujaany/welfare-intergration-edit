import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecordApplicantCvService {

  constructor(private httpObj:HttpClient) {

   }
   usrUrl="http://localhost:8080/hrm_system/applicant";

   postUser(applicantCv){
     return this.httpObj.post<RecordApplicantCv>(this.usrUrl,applicantCv);
     
   }
}
