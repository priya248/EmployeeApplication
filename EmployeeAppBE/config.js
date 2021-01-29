var config = {
    db: {
        user: 'admin',
        password: 'admin',
        dbName: 'Employee',
        connectionString: 'mongodb+srv://admin:<admin>@cluster0.h6tuo.mongodb.net/EmployeeDB?retryWrites=true&w=majority'
    }
 };

 const  getconnectionString = function(){
        return 'mongodb+srv://'+config.db.user+':'+ config.db.password+'@cluster0.h6tuo.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
    }

module.exports = {config , getconnectionString} ;