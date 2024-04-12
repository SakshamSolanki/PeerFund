class LoanAgrements{
    constructor(
        id,
        lenderId,
        borrowerId,
        loanRequestsId,
        amount,
        interestRate,
        duration,
        status,
    ) {
        (this.id = id)
        (this.lenderId = lenderId)
        (this.borrowerId = borrowerId)
        (this.loanRequestsId = loanRequestsId)
        (this.amount = amount)
        (this.interestRate = interestRate)
        (this.duration = duration)
        (this.status = status)
    }
}