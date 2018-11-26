import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestPromotion } from '../models/request-promotion';

@Injectable({
  providedIn: 'root'
})
export class RequestPromotionService {
  constructor(private http: HttpClient) { }
  // constructor() { }
  private RequestPromotiontUrl = 'http://localhost:8080/hrm_system/requestpromotion';

  //Get All leave request 
  public getAllPromotionRequest() {
    return this.http.get<RequestPromotion[]>(this.RequestPromotiontUrl);
  }

  public getPromotionRequestById(id) {
    return this.http.get<RequestPromotion[]>(this.RequestPromotiontUrl + "/id/" + id);
  }
  public postPromotionRequest(reqpro) {
    return this.http.post<RequestPromotion>(this.RequestPromotiontUrl, reqpro);
  }

  public deletePromotionRequest(reqpro) {
    return this.http.delete<RequestPromotion>(this.RequestPromotiontUrl + '/' + reqpro.id, reqpro);
  }
  public updatePromotionRequest(reqpro) {
    return this.http.put<RequestPromotion>(this.RequestPromotiontUrl + '/' + reqpro.id, reqpro);
  }
}
