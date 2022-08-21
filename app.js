// Question 1
const kg = document.getElementById("kg");
const meter = document.getElementById("meter");
const question1Click = document.getElementById("question1click");
const question1Ans = document.getElementById("answer");
const bmiValues = document.getElementById("bmiValues");

const bmi = () => {
   return (
      parseInt(kg.value) / (parseFloat(meter.value) * parseFloat(meter.value))
   );
};


question1Click.addEventListener("click",()=>{
   question1Ans.innerHTML = `Your BMI is ${parseFloat(bmi().toFixed(2))}`;
   bmiValues.innerHTML = `
      <div class="bmi">
            <h2>BMI Values</h2>
            <p>Underweight: less than 18.5</p>
            <p>Normal:     between 18.5 and 24.9</p>
            <p>Overweight: between 25 and 29.9</p>
            <p>Obese: 30 or greater</p>
         </div>
   `;
   console.log(parseFloat(bmi().toFixed(1)));
})

// Question 2
const question2click = document.getElementById("question2click");
const answer2 = document.getElementById("answer2");
question2click.addEventListener("click",()=>{
   const population = 8000000000
   const rate = 0.011

   answer2.innerHTML = `world population after one year = ${Math.floor(
      8000000000 + 8000000000 / 0.011
   )}billion ,world population after two year = ${Math.floor(
      8000000000 + 8000000000 / (0.011 * 2)
   )}billion ,
   world population after Three year = ${Math.floor(
      8000000000 + 8000000000 / (0.011 * 3)
   )}billion ,
   world population after Four year = ${Math.floor(
      8000000000 + 8000000000 / (0.011 * 4)
   )}billion ,
   world population after Five year = ${Math.floor(
      8000000000 + 8000000000 / (0.011 * 5)
   )}billion `;
})
