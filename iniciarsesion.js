// Obtenemos el formulario y el botón
const iniciarsesionform = document.querySelector("#iniciarsesionform");
const loginButton = document.querySelector("#login-button");

// Evento para manejar el clic en el botón de Login
loginButton.addEventListener("click", (e) => {
    e.preventDefault(); // Evita cualquier envío automático del formulario

    // Obtener los valores de los campos de texto
    const email = document.querySelector("#correo").value;
    const password = document.querySelector("#contraseña").value;

    // Simulación de datos almacenados en el localStorage (asegúrate de que "users" exista en localStorage)
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    
    // Validar al usuario
    if (!validUser) {
        alert("¡Usuario o contraseña incorrectos!");
        return;
    }
    
    // Almacenar el nombre de usuario y redirigir
    localStorage.setItem("userName", validUser.name);
    alert(`Bienvenido ${validUser.name}`);
    window.location.href = "home.html";
});
