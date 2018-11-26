export class UserLoanDetails {

    user_id: {
        user_id: number;
        user_name: string;
    }
    loan_obtained_date: Date;
    
    loanDetailsEntity: {
        amount: number;
    }
    installment_amount: number;
    installment_date: Date;
    redumption_date: Date;
}
