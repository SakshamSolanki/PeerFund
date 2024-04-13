class User {
    constructor(
        id, 
        name, 
        email, 
        phoneNumber,
        loanRequestsId,
        loanAgreementsId,
        funds,
        transactions
    ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.loanAgreementsId = loanAgreementsId;
        this.loanRequestsId = loanRequestsId;
        this.funds = funds;
        this.transactions = transactions;
    }
}

export { User };
