export function checkFormFeature() {
  function renderError(element, name, message) {
    if (name === "input") {
      const errorMessage = document.querySelector(`#${element.id} + p`);
      errorMessage.textContent = message;
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
      errorMessage.textContent = message;
      group.style.backgroundColor = "var(--yellow-200)";
      return;
    }

    // For the checkboxes
    if (name === "checkboxes") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-checkboxes`
      );
      const checkbox = document.querySelector(".checkboxes");
      errorMessage.textContent = message;
      checkbox.style.backgroundColor = "var(--yellow-200)";
      return;
    }

    if (name === "national") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-national`
      );
      const national = document.querySelector("#national");
      errorMessage.textContent = message;
      national.style.backgroundColor = "var(--yellow-200)";
      return;
    }

    if (name === "comment") {
      const errorMessage = document.querySelector(
        `.gender-ratio-error.gender-ratio-error-comment`
      );
      const comment = document.querySelector(".comment");
      errorMessage.textContent = message;
      comment.style.backgroundColor = "var(--yellow-200)";
      return;
    }
    if (name === "emailValid") {
      const errorMessage = document.querySelector(`#${element.id} + p`);
      errorMessage.textContent = message;
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
        renderError(element, name, "Hãy điền vào đây");
        return true;
      }
      deleteError(element, name);
      return false;
    }

    if (name === "gender") {
      if (element === null) {
        renderError(element, name, "Hãy chọn giới tính");
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
        renderError(element, name, "Hãy chọn sở thích");
        return true;
      }
      deleteError(element, name);
      return false;
    }

    if (name === "national") {
      if (element === "none") {
        renderError(element, name, "Hãy chọn quốc tịch");
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
      renderError(element, name, "Email không hợp lệ");
      return true;
    }
    deleteError(element, name);
    return false;
  }

  function limitChar(element, name) {
    if (name === "comment") {
      if (element.value.length > 200) {
        renderError(element, name, "Ghi chú quá dài ( > 200 )");
        return true;
      }
      deleteError(element, name);
      return false;
    }

    if (name === "input") {
      let isLimit = true;
      if (element.value.length >= 5 && element.value.length <= 30) return false;
      if (element.value.length < 5) renderError(element, name, "Tên quá ngắn");
      if (element.value.length > 30) renderError(element, name, "Tên quá dài");
      return isLimit;
    }
  }

  function isValid() {
    let validName = false,
      validEmail = false,
      validPass = true,
      validGender = true,
      validHobbies = true,
      validNational = true,
      validComment = true;

    if (!isEmpty(document.querySelector("#name"), "input"))
      validName = !limitChar(document.querySelector("#name"), "input");

    if (!isEmpty(document.querySelector("#email"), "input"))
      validEmail = !isValidEmail(
        document.querySelector("#email"),
        "emailValid"
      );

    validPass = !isEmpty(document.querySelector("#password"), "input");

    validGender = !isEmpty(
      document.querySelector('input[name="size"]:checked')?.id || null,
      "gender"
    );

    validHobbies = !isEmpty(
      document.querySelectorAll('.checkboxes input[type="checkbox"]:checked'),
      "checkboxes"
    );

    validNational = !isEmpty(
      document.getElementById("national").value,
      "national"
    );

    validComment = !limitChar(document.querySelector(".comment"), "comment");

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
  signupForm.addEventListener("submit", checkForm);
  logInForm.addEventListener("submit", checkFormLgin);
}
