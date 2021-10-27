"use strict";

const output = {
home : (req, res) => {
  res.render("home/index");
},

login : (req, res) => {
  res.render("home/login");
}
};
const users = {
  id: ["wjsdowl6661", "wjsdowl6662", "wjsdowl6663"],
  password: ["1", "2", "3"]
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true
        });
      }
    
    }

    return res.json({
      success: false,
      msg: "로그인 실패"
    });
  }
};




module.exports = {
    output, process
};