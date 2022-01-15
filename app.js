//list for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

//calculate results
function calculateResults(e){
  console.log('Calculating...')

  //Grab UI inputs
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  //Grab UI results
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //UI calculations
  const principal = parseFloat(amount.value) //get decimals of amount
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12

  //monthly payment calc
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest)/(x-1); 

  if (isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    console.log('Please check inputs')
  }



  e.preventDefault() //form submit, so we prevent default
}