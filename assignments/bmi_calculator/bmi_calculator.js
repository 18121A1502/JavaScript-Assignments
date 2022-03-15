// This function should return the BMI for a person 
function BMICalculator(mass,name, height) {
    // Write your code here
        if(!((typeof(height)==='number')&&(typeof(mass)==='number'))){
            console.log("INVALID INPUTS");
        }
        let heightInMet=height/100;
        let bmi=mass/Math.pow(heightInMet,2);
        if(bmi<18){
            console.log(name+",is underweight");
        }else if(bmi>18 && bmi<=24.9){
            console.log(name+",is overweight");
        }else if(bmi>25){
            console.log(name+",is overweight");
        }else if(bmi>=30){
            console.log(name+",is obese");
        }
}
BMICalculator(18,'kavuu',70)

module.exports = BMICalculator;
