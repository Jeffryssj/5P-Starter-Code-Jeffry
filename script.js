
let button = document.querySelector("button");

button.onclick =function () {
    let q1  = document.querySelector(".question1").value;
     let q2  = document.querySelector(".question2").value; 
    console.log("q1");
    console.log("q1");   
    
    
    
    if (q1 >5 && q2 === "cold showers")  { 
         document.querySelector(".result").innerHTML=" You have " + q1 + " siblings and you prefer  " + q2 + " . This mean You are  Thor "; }
     if (q1 <=4 && q2 === "cold showers")  { 
         document.querySelector(".result").innerHTML=" You have " + q1 + " siblings and you prefer  " + q2 + " . This mean You are  winter soldier "; }
    
    else if (q1 <=5 && q2 === "hot showers")  { 
         document.querySelector(".result").innerHTML=" You have " + q1 + "  siblings and you prefer  " + q2 + " This mean you are  Black Panther"; }
     if (q1 >6 && q2 === "hot showers")  { 
         document.querySelector(".result").innerHTML=" You have " + q1 + "  siblings and you prefer " + q2 + " This mean you are  Iron Man"; }
    
    
    }; 
