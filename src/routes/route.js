const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore');
const t1  = require('../logger/logger');
const t2  = require('../util/helper');
const lodash = require ("lodash")






router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)


    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    console.log (t1.welcome ())
   
    res.send("very important text")
})

//====assingment===//

let load = lodash.chunk (["jan","feb","march","april","may","june","july","augest","sep","oct","nov","dec" ],4)
let tail = [1,3,5,7,9,11,13,15,17,19] 
let skipFirst = lodash.tail(tail)  

let arr1 = [3,4 ,4]
let arr2 = [4 , 5 , 5 , 6]
let arr3 = [5, 6 ,6 ,7]
let arr4 = [7 , 7 ,8 , 9]

let uniqueVal = lodash.union(arr1,arr2,arr3,) 



let KeyValuePair = lodash.fromPairs( [ ["horror","The Shining" ],["drama","Titanic" ],["thriller","stutter Island"],["fantasy","Pans Labyrinth"] ] )



router.get('/test-us', function(req, res){
    console.log("I am here")
    console.log (t1.welcome ())
    console.log (t2.date() , t2.month() , t2.info())
    console.log (load)
    console.log (skipFirst)
    console.log (uniqueVal)
    console.log (KeyValuePair)

    
   
    res.send("Module assingment done")
})


module.exports = router;