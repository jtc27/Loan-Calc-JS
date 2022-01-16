//list for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

  //hide results immediately
  document.getElementById('results').style.display = 'none';

  //show loading gif
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);


  e.preventDefault() //form submit, so we prevent default
})

//calculate results
function calculateResults(){
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

    //shows results 
    document.getElementById('results').style.display = 'block';

    //hides loading gif 
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
    //hides loading gif 
    document.getElementById('loading').style.display = 'none';
  }

}

//show errors
function showError(error){
  const errorDiv = document.createElement('div')

  //grab elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  errorDiv.className = 'alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading); 

  //clear error message after 2 seconds
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove()
}