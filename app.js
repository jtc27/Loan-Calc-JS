//list for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

//calculate results
function calculateResults(e){
  console.log('Calculating...')

  e.preventDefault() //form submit, so we prevent default
}