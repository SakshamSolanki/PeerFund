class LoanRequests {
    constructor(
        id,
        userId,
        amount,
        interestRate,
        duration,
        currency,
        status,
    ){
        (this.id = id),
        (this.userId = userId),
        (this.amount = amount),
        (this.interestRate = interestRate),
        (this.duration = duration),
        (this.currency = currency),
        (this.status = status)  
    }
}

export default LoanRequests