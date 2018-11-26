import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralWelfare } from '../Model/general-welfare';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class GeneralWelfareService {



 constructor(private httpObj: HttpClient) { }
  private GeneralWelfareUrl = "http://localhost:8080/hrm_system";



public getGeneralWelfare(){
  return this.httpObj.get<GeneralWelfare[]>(this.GeneralWelfareUrl );

}
public createGeneralWelfare(GeneralWelfare){
  return this.httpObj.post<GeneralWelfare>(this.GeneralWelfareUrl ,GeneralWelfare);

}
public updateGeneralWelfare(GeneralWelfare){
  return this.httpObj.put<GeneralWelfare>(this.GeneralWelfareUrl + "/"+GeneralWelfare.id, GeneralWelfare);
}

public deleteGeneralWelfare(GeneralWelfare){
  return this.httpObj.delete<GeneralWelfare>(this.GeneralWelfareUrl + "/"+GeneralWelfare.id,GeneralWelfare);
}

}

