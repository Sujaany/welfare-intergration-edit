import { Job } from "./job";
import { User } from "src/app/models/employee-termination/user";
import { Department } from "./department";
import { RecruitmentType } from "./recruitment-type";

export class PlanVacancy {
    id: Number;
    noOfVacancy: Number;
    salaryScale: Number;
    vacancyOpenDate: Date;
    vacancyCloseDate: Date;
    interviewDate: Date;
    keyRecuitment: String;

    // userid: Number;
    // jobid: Number;
    // departmentid: Number;
    // recruitmentid: Number;

    user:User = new User();
    job:Job = new Job();
    department:Department= new Department();
    recruitment:RecruitmentType= new RecruitmentType();
}
