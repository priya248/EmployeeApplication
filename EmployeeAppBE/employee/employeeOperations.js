var Emp = require('../models/employeeModel'); 
var bodyParser = require('body-parser');


module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.post('/create', function(req,res){
    Emp.create(req.body, function(err,result){
      res.send({'status': 'Success','message': 'Employee record created successfully', 'data': result});
      if(err) { res.send({
        "status": "error",
        "data": err.message, 
        "message": "An error has occurred"
      });
    }
    });
  })

  app.get('/getEmpList', function(req,res){
    Emp.find( function(err,result){
      res.send({'status': 'Success','data' : result});
      if(err) { res.send({
        "status": "error",
        "data": err.message, 
        "message": "An error has occurred"
      });
    }
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
        res.send({'status': 'Success','message' :'Successfully updated record'});
        if(err) { res.send({
          "status": "error",
          "data": err.message, 
          "message": "An error has occurred"
        });
      }
      }
     );
   }
  })

  app.post('/delete', function(req,res){
    
    if(req.body.id){
     Emp.findByIdAndDelete(req.body.id,function(err, result){
      res.send({'status': 'Success','message': 'Employee record deleted successfully'});
      if(err) { res.send({
        "status": "error",
        "data": err.message, 
        "message": "An error has occurred"
      });
    }
  });
  }
});

}
