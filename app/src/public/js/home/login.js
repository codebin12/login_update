const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector(".go");


loginBtn.addEventListener("click", login)

function login(){
    data = {
        id : id.value,
        password : password.value,
    };

    // /login에 post방식으로 데이터를 전달한것이기 때문에 index.js에서 /login경로로 받아온 post방식의 데이터를 처리하는 구문에서 ctrl.process로 넘어가게된다
    fetch("/login", { // fetch는 데이터를 전송하는 함수이다, 로그인 버튼을 누르면 "/login" 경로로 데이터가 전송되는데 데이터 전송방식과 데이터 분류는 아래에 기재되어있다
        method: "POST", // 로그인 데이터이므로 post 방식으로 전송
        headers:{
            "Content-Type": "application/json", // 헤더에 데이터 분류를 기재한다
        },
        body: JSON.stringify(data), // req 즉 html에서 받아온 id와 password의 객체를 json형태로 바꾼후 body의 담는다
    })
    .then((res)=> res.json())
    .then((res) => {
        if(res.status){
            location.href = "/";
        }
        else {
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("로그인중 에러 발생"))
    })
    
}