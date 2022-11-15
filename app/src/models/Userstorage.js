class Userstorage {
    // static newuser = {}; forEach문으로 구사하였을때
    static #user = {
        id : ["qwer", "asdf", "zxcv"],
        psword : ["1234", "5678", "0000"],
        name : ["명수", "준하", "홍철"]
    }
    
    static getuser(...args){
        const users = this.#user
        
        // forEach문으로 구사하였을때

        // args.forEach((cur) => {
        //     if(users.hasOwnProperty(cur)){
        //         this.newuser[cur] = users[cur]
        //     }
        //     else{
        //         console.log("해당 매개변수의 해당하는 키값이 존재하지않습니다")
        //     }
        // })
        
        // return this.newuser;

///////////////////////////////////////////////////////////////////////////////////////////////////////////// 둘다 사용가능
        
        // reduce를 사용하였을때

        const newuser = args.reduce((cur, args)=>{
            if(users.hasOwnProperty(args)){
                cur[args] = users[args]
            }
            else{
                console.log("해당 매개변수의 해당하는 키값이 존재하지않습니다")
            }
            return cur;
        },{});

        return newuser;
    }
}

module.exports = Userstorage