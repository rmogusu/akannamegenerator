Y,MM,DD,d,dayValue;
var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function calculateDayValue() {
    CC=parseInt(document.getElementById("century").value);
    YY=parseInt(document.getElementById("year").value);
    MM=parseInt(document.getElementById("month").value);
    DD=parseInt(document.getElementById("date").value);
    d=(((CC/4) - 2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10))+ DD)%7;
    return (Math.floor(d));
}
function getGender() {
var gender = document.getElementsByName("gender");

    if (gender[0].checked===true) {
       var gender = "male";

    } else if (gender[1].checked===true) {
        var gender = "female";

    } else {
        alert ("Please input your gender");
    }

        if(gender==="male" && dayValue===1){
        alert("Since you were born on " + days[0] + " ,your Akan name is " + maleNames[0] + ".");
    } else if (gender==="female" && dayValue===1){
        alert("Since you were born on " + days[0] + " , your Akan name is " + femaleNames[0] + ".");
    }else if (gender==="male"&& dayValue===2){
        alert("Since you were born on "+days[1]+" , your Akan name is "+maleNames[1] + ".");
    } else if(gender==="female"&& dayValue===2){
        alert("Since you were born on "+days[1]+" , your Akan name is "+femaleNames[1] + ".");
    } else if (gender==="male" && dayValue===3){
        alert("Since you were born on "+days[2]+" , your Akan name is "+maleNames[2] + ".");
    } else if (gender==="female" && dayValue===3){
        alert("Since you were born on "+days[2]+" , your Akan name is "+femaleNames[2] + ".");
    } else if (gender==="male" && dayValue===4){
        alert("Since you were born on "+days[3]+" , your Akan name is "+maleNames[3] + ".");
    } else if (gender==="female" && dayValue===4){
        alert("Since you were born on "+days[3]+" , your Akan name is "+femaleNames[3] + ".");
    } else if (gender==="male" && dayValue===5){
        alert("Since you were born on "+days[4]+" , your Akan name is "+maleNames[4] + ".");
    } else if (gender==="female" && dayValue===5){
        alert("Since you were born on "+days[4]+" , your Akan name is "+femaleNames[4] + ".");
    } else if (gender==="male" && dayValue===6){
        alert("Since you were born on "+days[5]+" , your Akan name is "+maleNames[5] + ".");
    } else if (gender==="female" && dayValue===6){
        alert("Since you were born on "+days[5]+" , your Akan name is "+femaleNames[5] + ".");
    } else if (gender==="male" && dayValue===7){
        alert("Since you were born on "+days[6]+" , your Akan name is "+maleNames[6] + ".");
    } else if (gender === "female" && dayValue === 7){
        alert("Since you were born on "+days[6]+" , your Akan name is "+femaleNames[6] + ".");
    }
}

function getName(){
    dayValue = calculateDayValue();
    getGender();
  }