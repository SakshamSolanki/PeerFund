class User {
    constructor(
        id, 
        name, 
        email, 
        phoneNumber,
        loanRequestsId,
        loanAgrementsId,
        transactions
    ){
        (this.id = id),
        (this.name = name)
        (this.email = email)
        (this.phoneNumber = phoneNumber)
        (this.loanAgrementsId = loanAgrementsId)
        (this.loanRequestsId = loanRequestsId)
        (this.transactions = transactions)
    }
}

export default User;