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

      // Simular login
      toggle.textContent = "Iniciando sesión...";
      setTimeout(() => {
        alert("Inicio de sesión exitoso 🎉");
        // window.location.href = "/dashboard.html";
      }, 1000);
    });