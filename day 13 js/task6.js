function bmical(Weight,height){
    var bmi=Weight/(height*height);
    return Math.round(bmi);

}
var bmi=bmical(65,1.8);
console.log(bmi);
if(bmi<18.5)
{
    console.log(`Underweight`)
}
else if (bmi>=18.5 && bmi<=24.9)
{
    console.log(`normal weight`)
}
else{
    console.log(`overweight`)
}