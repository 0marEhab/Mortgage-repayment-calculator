document
  .getElementById("mortgageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const term = document.getElementById("term").value;
    const rate = document.getElementById("rate").value;

    if (amount <= 0 || term <= 0 || rate <= 0) {
      alert("Please enter valid values.");
      return;
    }
    if (amount == "" || term == "" || rate == "") {
      alert("Please enter valid values.");
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    const monthlyRepayment =
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    document.getElementById(
      "results"
    ).innerHTML = `<p>Monthly Repayment: £${monthlyRepayment.toFixed(2)}</p>`;
  });
