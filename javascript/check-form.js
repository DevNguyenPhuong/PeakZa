export function checkFormFeature() {
  function renderError(element, name) {
    if (name === "input") {
      const errorMessage = document.querySelector(`#${element.id} + p`);
      errorMessage.textContent = "Hãy điền vào đây";
      element.style.backgroundColor = "var(--yellow-200)";
      var style = document.createElement("style");
      style.innerHTML = `
     #${element.id}::placeholder {
       color: var(--red-400) !important;
     } `;
      document.head.appendChild(style);
      return;
    }

    if (name === "gender") {
      const errorMessage = document.querySelector(`.gender-ratio-error.gender`);
      const group = document.querySelector(".input-group-ratio-gender");
      errorMessage.textContent = "Hãy chọn giới tính";
      group.style.backgroundColor = "var(--yellow-200)";
      return;
    }

    // For the checkboxes
    if (name === "checkboxes") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-checkboxes`
      );
      const checkbox = document.querySelector(".checkboxes");
      errorMessage.textContent = "Hãy chọn sở thích";
      checkbox.style.backgroundColor = "var(--yellow-200)";
      return;
    }

    if (name === "national") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-national`
      );
      const national = document.querySelector("#national");
      errorMessage.textContent = "Hãy chọn quốc tịch";
      national.style.backgroundColor = "var(--yellow-200)";
      return;
    }

    if (name === "comment") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-comment`
      );
      const comment = document.querySelector(".comment");
      errorMessage.textContent = "Ghi chú quá dài ( > 200 )";
      comment.style.backgroundColor = "var(--yellow-200)";
      return;
    }
    if (name === "emailValid") {
      const errorMessage = document.querySelector(`#${element.id} + p`);
      errorMessage.textContent = "Email không hợp lệ";
      element.style.backgroundColor = "var(--yellow-200)";
      var style = document.createElement("style");
      style.innerHTML = `
     #${element.id}::placeholder {
       color: var(--red-400) !important;
     } `;
      document.head.appendChild(style);
      return;
    }
  }

  function deleteError(element, name) {
    if (name === "input") {
      const errorMessage = document.querySelector(`#${element.id} + p`);
      errorMessage.textContent = "";
      element.style.backgroundColor = "#fff";
      var style = document.createElement("style");
      style.innerHTML = `
      #${element.id}::placeholder {
        color: var(--zinc-500) !important;
      }
    `;
      document.head.appendChild(style);
      return;
    }
    if (name === "checkboxes") {
      // For the checkboxes
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-checkboxes`
      );
      const checkbox = document.querySelector(".checkboxes");
      errorMessage.textContent = "";
      checkbox.style.backgroundColor = "var(--red-50)";
      return;
    }

    if (name === "gender") {
      const errorMessage = document.querySelector(`.gender-ratio-error.gender`);
      const group = document.querySelector(".input-group-ratio-gender");
      errorMessage.textContent = "";
      group.style.backgroundColor = "var(--red-50)";
      return;
    }

    if (name === "national") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-national`
      );
      const national = document.querySelector("#national");
      errorMessage.textContent = "";
      national.style.backgroundColor = "#fff";
      return;
    }

    if (name === "comment") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-comment`
      );
      const comment = document.querySelector(".comment");
      errorMessage.textContent = "";
      comment.style.backgroundColor = "#fff";
      return;
    }

    if (name === "emailValid") {
      const errorMessage = document.querySelector(`#${element.id} + p`);
      errorMessage.textContent = "";
      element.style.backgroundColor = "#fff";
      var style = document.createElement("style");
      style.innerHTML = `
      #${element.id}::placeholder {
        color: var(--zinc-500) !important;
      }
    `;
      document.head.appendChild(style);
      return;
    }
  }
  function isEmpty(element, name) {
    if (name === "input") {
      if (element?.value === "") {
        renderError(element, name);
        return true;
      }
      deleteError(element, name);
      return false;
    }

    if (name === "gender") {
      if (element === null) {
        renderError(element, name);
        return true;
      }
      deleteError(element, name);
      return false;
    }

    if (name === "checkboxes") {
      const checkedValues = Array.from(element).map(
        (checkbox) => checkbox.value
      );
      if (checkedValues.length === 0) {
        renderError(element, name);
        return true;
      }
      deleteError(element, name);
      return false;
    }

    if (name === "national") {
      if (element === "none") {
        renderError(element, name);
        return true;
      }
      deleteError(element, name);
      return false;
    }
  }

  function isValidEmail(element, name) {
    const email = element.value;
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      renderError(element, name);
      return true;
    }
    deleteError(element, name);
    return false;
  }

  function limitChar(element, name) {
    if (name === "comment") {
      if (element.value.length > 200) {
        renderError(element, name);
        return true;
      }
      deleteError(element, name);
      return false;
    }
  }

  function isValid() {
    let validName = true,
      validEmail = true,
      validPass = true,
      validGender = true,
      validHobbies = true,
      validNational = true,
      validComment = true;

    const name = document.querySelector("#name");
    validName = !isEmpty(name, "input");

    const email = document.querySelector("#email");
    if (!isEmpty(email, "input"))
      validEmail = !isValidEmail(email, "emailValid");

    const password = document.querySelector("#password");
    validPass = !isEmpty(password, "input");

    const selectedOption =
      document.querySelector('input[name="size"]:checked')?.id || null;
    validGender = !isEmpty(selectedOption, "gender");

    const checkboxes = document.querySelectorAll(
      '.checkboxes input[type="checkbox"]:checked'
    );
    validHobbies = !isEmpty(checkboxes, "checkboxes");

    const national = document.getElementById("national");
    validNational = !isEmpty(national.value, "national");

    const comment = document.querySelector(".comment");
    validComment = !limitChar(comment, "comment");

    return (
      validName &&
      validEmail &&
      validPass &&
      validGender &&
      validHobbies &&
      validNational &&
      validComment
    );
  }

  const checkForm = async (e) => {
    e.preventDefault();
    if (isValid()) {
      setTimeout(() => {
        window.alert("submitted");
      }, 1000);
    }
  };

  function isValidLogin() {
    let validEmail = true,
      validPass = true;

    const email = document.querySelector("#emailx");
    if (!isEmpty(email, "input"))
      validEmail = !isValidEmail(email, "emailValid");

    const password = document.querySelector("#passwordx");
    validPass = !isEmpty(password, "input");

    return validEmail && validPass;
  }

  const checkFormLgin = async (e) => {
    e.preventDefault();
    if (isValidLogin()) {
      setTimeout(() => {
        window.alert("submitted");
      }, 1000);
    }
  };

  const signupForm = document.querySelector(
    ".form-container.sign-up-container"
  );
  const logInForm = document.querySelector(".form-container.sign-in-container");
  // const loginBtn = document.querySelector(".btn.btn--medium.btn--red.login-btn");
  // loginBtn.addEventListener("click", checkForm);
  signupForm.addEventListener("submit", checkForm);
  logInForm.addEventListener("submit", checkFormLgin);
}
