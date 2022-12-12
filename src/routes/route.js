const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

//==============Assingment =================//

router.get ("/movies", function (req , resp) {

    let arr = ["captain America" , "hulk" , "Uri" , "3 ideot"]
    resp.send (arr)

    
})


router.get ("/movies/:indexNumber" , function (req ,res) {

    let arr = ["captain America" , "hulk" , "Uri" , "3 ideot"]
    let index1=req.params.indexNumber

    if  (index1 > arr.length || index1==arr.length) {

        res.send ("enter a valid index")
    }
    else {

        res.send (arr[index1])
    }

})

router.get ("/films" , function (req,res) {

    let arr1 = [
        {
            id:1,
            name:"captain Americ"
        },
        {
            id: 2,
            name: "hulk"
        },
        {
            id : 3,
            name : "uri"
        },
        {
            id : 4,
            name : "3 ideot"
        }
    ]

    res.send (arr1)
       
})



router.get ("/films/:filmsId" , function (req,res) {

    let arr1 = [
        {
            id:1,
            name:"captain Americ"
        },
        {
            id: 2,
            name: "hulk"
        },
        {
            id : 3,
            name : "uri"
        },
        {
            id : 4,
            name : "3 ideot"
        }
    ]

    let ID = req.params.filmsId

    if (ID > arr1.length || ID == arr1.length) {
        
        res.send ("no films present by thi id")
    }
    else {

        res.send( arr1[ID])
    }

    res.send (arr1)
       
})

module.exports = router;