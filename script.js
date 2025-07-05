const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const termsBox = document.getElementById("terms");
const notAgree = document.getElementById("notAgree");
const submitBtn = document.getElementById("submitBtn");

let scrolledToEnd = false;

// 利用規約スクロール完了でフラグ
termsBox.addEventListener("scroll", () => {
  if (termsBox.scrollTop + termsBox.clientHeight >= termsBox.scrollHeight) {
    scrolledToEnd = true;
    checkForm();
  }
});

function checkForm() {
  const nameValid = /^[A-Z]{3,10}$/.test(nameInput.value);
  const emailValid = emailInput.value === "example@hell.register.site";
  const pass = passInput.value;
  const passValid = pass.length >= 100 && /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /\d/.test(pass) && /[!@#$%^&*()]/.test(pass);
  const agreeValid = notAgree.checked;
  const captchaValid = true; // ここはラジオチェック全部確認必要

  if (nameValid && emailValid && passValid && scrolledToEnd && agreeValid && captchaValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.querySelectorAll("input, textarea").forEach(el => {
  el.addEventListener("input", checkForm);
});
notAgree.addEventListener("change", checkForm);
