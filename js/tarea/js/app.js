async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Petición a la URL de publicaciones del usuario 1
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );

    if (!res.ok) {
      throw new Error("Respuesta no válida del servidor");
    }

    // 2. Convertir respuesta a JSON
    const posts = await res.json();

    // 3. Renderizar los títulos con map, join e innerHTML
    lista.innerHTML = posts.map((post) => `<li>${post.title}</li>`).join("");
  } catch (error) {
    // 4. Mensaje en la vista si algo falla
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPosts();
