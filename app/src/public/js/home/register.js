"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const registerBtn = document.querySelector("button");

const register = (e) => {
    e.preventDefault();
    if (!id.value) return alert("아이디 입력 부탁");
    if (!password.value || !confirmPassword.value) return alert("비밀번호 입력 부탁");

    if (password.value !== confirmPassword.value) {
        return alert("비밀번호 일치하지 않음");
    }

  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    };
    console.log(req);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
};

registerBtn.addEventListener("click", register);
