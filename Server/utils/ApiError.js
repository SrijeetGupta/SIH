

class ApiError extends Error{
    constructor(statuscode,msg){
        this.statuscode=statuscode,
        this.msg=msg
    }
}

export default ApiError