"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");

const login = (e) => {
    e.preventDefault();
 if (!id.value) return alert("아이디 입력 부탁");
 if (!password.value) return alert("비밀번호 입력 부탁");
 


  const req = {
    id: id.value,
    password: password.value,
  };
    fetch("/login", {
        'method': "POST",
       'headers': {
    'Content-Type': 'application/json',
  },
        'body': JSON.stringify(req),
    }).then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        }).catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
};

loginBtn.addEventListener("click", login);