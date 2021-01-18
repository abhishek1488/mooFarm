// Controller for all /albums routes
// const employee = require("../model/employe")
const employee   = require("../db/dbConnection")

module.exports = {
 async addEmployee(req, res) {
    try {
      let emplyeeDetail = req.body
     // emplyeeDetail.DOB  = new Date()
      // const saveDetail   =  new  employee(emplyeeDetail);
     
      //      await saveDetail.save();

      employee.query("INSERT INTO employee_detail set ?", emplyeeDetail, function (err, res) {
        if(err) {
          console.log("error: ", err);
        }
        else{
          console.log(res.insertId);
               }
        });
           res.sendResponse.success(
            {
              msg: "employee detail added successFully",
            },
            200
          );
    } catch (error) {
      console.log("error..",error)
      res.sendResponse.fail(
        {
          msg: "something went wrong",
        },
        500
      );
    }
  },
  async getDetail(req, res) {
    try {
      let tempDetail =[]
      // const employeeDetail   =  await employee.find({});
      employee.query("Select * from  employee_detail ",  (err, data)=> {
        if(err) {
          console.log("error: ", err);
       res.send(err)
        }
        else{
         res.send(data)
        }
        }); 
    } catch (error) {
      console.log("error",error)
      res.sendResponse.fail(
        {
          msg: "something went wrong",
        },
        500
      );
    }
  },

};
async function getEmployeeDetail(){
  employee.query("Select * from  employee_detail ", function (err, res) {
    if(err) {
      console.log("error: ", err);
   return err
    }
    else{
      console.log('employees : ', res);
   return res
    }
    });
}