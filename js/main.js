// Mostrar/ocultar contraseña
const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  toggle.textContent = type === "password" ? "Mostrar" : "Ocultar";
});

// Validación básica
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = document.getElementById("email").value.trim();
  const passVal = password.value.trim();

  if (!emailVal || !passVal) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validar credenciales
  if (emailVal === "juan@gmail.com" && passVal === "1234") {
    toggle.textContent = "Iniciando sesión...";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    alert("Correo o contraseña incorrectos.");
    toggle.textContent = "Mostrar";
  }
});