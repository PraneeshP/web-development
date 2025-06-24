function bmical(Weight,height){
    var bmi=Weight/(height*height);
    return Math.round(bmi);

}
var bmi=bmical(65,1.8);
console.log(bmi);