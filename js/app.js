console.log("Laboratorio 10 listo");

// ===== Ejercicio 3: fetch con .then() =====
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json()) // Convierte la respuesta bruta a objeto JSON usable
  .then((usuario) => console.log("Usuario 1:", usuario.name))
  .catch((error) => console.log("Ocurrió un error:", error));

// ===== Ejercicio 4: async/await =====
async function cargarUsuario() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const usuario = await res.json();
  console.log("Usuario 2:", usuario.name);
}

cargarUsuario();

// ===== Ejercicio 5: try/catch =====
async function probarError() {
  try {
    // Intencionadamente escribimos "usuarios" en vez de "users" para forzar el error 404
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("No se encontró la información");
    }

    const datos = await res.json();
    console.log("Datos recibidos:", datos);
  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

probarError();

// ===== Ejercicio 6: mostrar en la página =====
async function mostrarUsuarios() {
  const lista = document.querySelector("#lista");
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await res.json();

    lista.innerHTML = usuarios
      .map((u) => `<li>${u.name} - ${u.email}</li>`)
      .join("");
  } catch (error) {
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarUsuarios();
