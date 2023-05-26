//jshint esversion:6
//console.log(module);
exports.getDate=function(){

var today = new Date();
  
var options ={
    weekday : "long",
    day:"numeric",
    month:"long"
}
//console.log(today);
//console.log(day);
return today.toLocaleDateString("en-IN", options);
}
exports.getDay =function(){

    var today = new Date();
      
    var options ={
        weekday : "long"
      
    }
   
    
    //console.log(day);
    return today.toLocaleDateString("en-IN", options);
    }
    console.log(module.exports)