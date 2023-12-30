const form = document.querySelector('form')
// console.log(form); 

// this usecase will give you empty value
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelector('#result-guide')
  
   //checkes
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`
    } else{
       const bmi = (weight / ((height * height)/10000)).toFixed(2)

       //show the result
       results.innerHTML = `<span>${bmi}</span>`
       
       switch (true) {
        case (bmi <= 18.6):
            guide.innerHTML = `The BMI is under 18.6 and total BMI: ${bmi}`;
            break;
        case (18.6 < bmi && bmi <= 24.9):
            guide.innerHTML = `The BMI range is between 18.6 and 24.9 and total BMI: ${bmi}`;
            break;
        case (bmi > 24.9):
            guide.innerHTML = `The BMI is greater than 24.9 and total BMI: ${bmi}`;
            break;
        default:
            // Handle the default case if needed
            break;
    }
    }

    // console.log(guide);
})