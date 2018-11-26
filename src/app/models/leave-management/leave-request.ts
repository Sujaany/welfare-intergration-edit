import { LeaveType } from "./leave-type";
import { User } from "./user";

export class LeaveRequest {
    leaveType : LeaveType = new LeaveType();
    startDate :Date;
    endDate : Date;
    noOfDays: number;
    reason : string;
    attachment : File;
    userName : string;
}
