const labels = document.querySelectorAll(".label")
const inputs = {
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
}
const loginBtn = document.querySelector(".btn")

function showErrorSpan(e, message) {
  const span = document.createElement("span")
  span.textContent = message
  span.className = "error"
  e.target.parentElement.appendChild(span)
  setTimeout(() => {
    e.target.parentElement.removeChild(span)
  }, 5000)
}

function sendHandler(e) {
  // Please add an bcrypt like lib for password encrypting.
  e.preventDefault()
  const { email, password } = inputs
  if (email.value.match("@") && email.value.endsWith(".com")) {
    if (password.length > 6) {
      return fetch("http://hostname/test", {
        body: {
          email: email.value,
          password: password.value,
        },
        method: "post",
      })
    }

    return showErrorSpan(e, "Password must be longer than 6 characters")
  }
  return showErrorSpan(e, "Email field must be format: abcdefg@abcdefg.com")
}
function addStyleTransition() {
  labels.forEach((label) => {
    label.innerHTML = label.textContent
      .split("")
      .map(
        (letter, index) =>
          `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
      )
      .join("")
  })
}

function main() {
  loginBtn.addEventListener("pointerup", sendHandler)
  addStyleTransition()
}

main()
