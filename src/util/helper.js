const t2 = function printDate () {

    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');


//today = mm + '/' + dd + '/' + yyyy;
    console.log(dd);
    return "done "
}

const t3 = function printMonth () { 
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     //var yyyy = today.getFullYear();

     console.log (mm)
  return "done"
}

const t4 = function getBatchInfo () {

    console.log ("Batch name:- Californium, week:-3 , day :-4, the topic for today is Nodejs module system’ ")
    return "done"
}



module.exports.date=t2
module.exports.month=t3
module.exports.info=t4