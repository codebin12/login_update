const get_ejs = {
    home : (req, res)=>{
        res.render("home/index")
    },
    login : (req, res)=>{
        res.render("home/login")
    }
}

// const connection = require("../../db/db")


// const process = {
//     login : async(req, res) =>{ 
//         var check = req.body // 여기서 req는 fetch에서 받아온 body값인데 body는 json 방식으로 넘어왔으므로 bodyparser이라는 모듈을 사용해주어야한다.
//         var id = check.id
//         var password = check.password
//         connection.query("SELECT * FROM info2",(err,rows)=>{
//             if(err) throw err;
//             var db_id = rows[1].id // rows[1] : local instance mysql in info in 2st rows of info2
//             var db_password = rows[1].password
//             if(id == db_id && password == db_password){
//                 return res.json({
//                     status : true,
//                 })
//             }else{
//                 return res.json({
//                     status : false,
//                     msg : "로그인 실패",
//                 })
//             }
//         })   
//         // console.log(id,password) 
//         // console.log(result)        
//     },


// };

const Userstorage = require("../../models/Userstorage")


const process ={
    login : (req, res) => {
        var account = req.body
        let input_id = account.id
        let input_password = account.password
        const response = {}
        const user = Userstorage.getuser("id","psword")
        
        if(user.id.includes(input_id)){

            idx = user.id.indexOf(input_id)

            if(input_password == user.psword[idx]){
                response.status = true;
                return res.json(response)
            }
            else{
                response.status = false;
                response.msg = "비밀번호 오류";
                return res.json(response)
            }
        }
        else{
            response.status = false;
            response.msg = "로그인 실패";
            return res.json(response)
        }
    }
}


module.exports = {
    get_ejs,
    process,
}
