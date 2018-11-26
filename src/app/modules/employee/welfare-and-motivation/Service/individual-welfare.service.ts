import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IndividualWelfare } from '../Model/individual-welfare';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class IndividualWelfareService {
  constructor(private httpObj: HttpClient) { }
  private individualWelfareUrl = "http://localhost:8080/hrm_system";



public getIndividualWelfare(){
  return this.httpObj.get<IndividualWelfare[]>(this.individualWelfareUrl );

}
public createIndividualWelfare(IndividualWelfare){
  return this.httpObj.post<IndividualWelfare>(this.individualWelfareUrl ,IndividualWelfare);

}
public updateIndividualWelfare(IndividualWelfare){
  return this.httpObj.put<IndividualWelfare>(this.individualWelfareUrl + "/"+IndividualWelfare.id, IndividualWelfare);
}

public deleteIndividualWelfare(IndividualWelfare){
  return this.httpObj.delete<IndividualWelfare>(this.individualWelfareUrl + "/"+IndividualWelfare.id,IndividualWelfare);
}

}

