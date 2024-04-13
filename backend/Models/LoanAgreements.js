class LoanAgrements{
    constructor(
        id,
        lenderId,
        borrowerId,
        loanRequestsId,
        amount,
        interestRate,
        duration,
        currency,
        status,
    ) {
        (this.id = id),
        (this.lenderId = lenderId),
        (this.borrowerId = borrowerId),
        (this.loanRequestsId = loanRequestsId),
        (this.amount = amount),
        (this.interestRate = interestRate),
        (this.duration = duration),
        (this.currency = currency),
        (this.status = status)
    }
}