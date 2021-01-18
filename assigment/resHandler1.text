class ResponseHandler {
    constructor(res) {
      this.response = res;
    }
  
    fail(msg,statusCode = 200) {
      this.response.status(statusCode).json({
        code: statusCode,
        type: "handled",
        status: false,
        error: msg
      });
    }
    exception(msg) {
      this.response.json({
        code: 200,
        type: "Unhandled",
        status: false,
        error: msg.toString()
      });
    }
    success(msg,result=true) {
      this.response.json({
        code: 200,
        type: "",
        status: result,
        response: msg
      });
    }
  }
  module.exports = res => new ResponseHandler(res);