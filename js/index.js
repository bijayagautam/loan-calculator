
let calButton = document.getElementById("calculateButton");

function loanDetails(){
    let loanAmount = parseInt(document.getElementById("loanAmount").value);
    let loanTerms = parseInt(document.getElementById("numOfYears").value);
    const annualIntRate = 5;

    let numOfPayments = loanTerms * 12;
    let IntRate = ((annualIntRate/100)/12);

    let monthlyIntRate = IntRate + 1;
    let monSum = Math.pow(monthlyIntRate, -numOfPayments);
    let monSub = 1 - monSum;
    let userMonthlyIntRate = loanAmount * IntRate;
    let monthlyInstallment = userMonthlyIntRate / monSub;

    document.getElementById(`loanAmountDetail`).innerHTML += `$ ${loanAmount}<br>`;
    document.getElementById(`interestRateDetail`).innerHTML += `${monthlyIntRate}<br>`;
    document.getElementById(`numberofYearsDetail`).innerHTML += `${loanTerms}<br>`;
    document.getElementById(`monthlyPaymentsDetail`).innerHTML += `$ ${monthlyInstallment}<br>`;
}

calButton.addEventListener("click",loanDetails)

