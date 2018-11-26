import { Injectable } from '@angular/core';
import { ParAppraisor } from '../models/par-appraisor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleParService {

  constructor(private http: HttpClient){}

  private sheduleparUrl = 'http://localhost:8080/schedulepar';

  public addSchedulePar(par) {
    return this.http.post<ParAppraisor>(this.sheduleparUrl,par);
  }
}
