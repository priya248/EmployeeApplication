// var express = require('express');
// var router = express.Router();
var Emp = require('../models/employeeModel'); 
var bodyParser = require('body-parser');


module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/api/emp', function(req,res){
    var emplo = [
      {
        name : 'Will',
        designation: 'UX designer',
        salary: 100000,
        joiningDate: 03/13/2020,
        type: 'Fulltime'
      }
    ]
    Emp.create(emplo, function(err,result){
      res.send(result);
    })
  })

  app.get('/getEmpList', function(req,res){
    
    Emp.find( function(err,result){
      res.send(result);
    })
  })

  app.post('/update', function(req,res){
    
   if(req.body.id){
    Emp.findByIdAndUpdate(req.body.id,{
      name : req.body.name , 
      designation: req.body.designation,
      salary: req.body.salary,
      joiningDate: req.body.joiningDate,
      type: req.body.type}, function(err, result){
        if(err) throw err,
        
        res.send('Success');
      }
     );
   }
  })

  app.post('/add', function(req,res){
   
    if(req.body){
      var newemp = {
        name : req.body.name,
        designation: 'UX designer',
        salary: 100000,
        joiningDate: 03/13/2020,
        type: 'Fulltime'
      }
      Emp.insert(newemp, function(err, result){
        if(err) throw err;
        res.send('Successfully inserted new record')
      });
     
    }
   });
}


// const dbURI ="mongodb+srv://admin:admin@cluster0.h6tuo.mongodb.net/Employee?retryWrites=true&w=majority)";

// const options = {
//   useNewUrlParser: true,
//   dbName: "Employee"
// };


// router.get('/list',function(req,res){   
//     console.log("db connecting");
    // const conn =mongoose.connect(dbURI, options).then(
    //     () => {
    //       console.log("Database connection established!");
          
    //     },
    //     err => {
    //       console.log("Error connecting Database instance due to: ", err);
    //     }
    //    );
    // console.log("db connecting 1");

    // const conn1 =mongoose.connect(dbURI, options);
    // const col = conn1.collection('employeeCollection')
    // res.send("Get all users." ,col);

// });
  

// module.exports.router = router;
