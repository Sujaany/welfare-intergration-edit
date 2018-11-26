import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementInteractionService {

constructor() { }

private userId= new BehaviorSubject<number>(null);

userId$ = this.userId.asObservable();

sendUserId(userId: number) {
  this.userId.next(userId);
}
}
