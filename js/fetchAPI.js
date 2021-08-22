const BASE_URL = "https://jsonplaceholder.typicode.com"

//Función para traer todos los posts de la API.

export  async function getPosts(){
  const res = await fetch(`${BASE_URL}/posts`)
  const data = await res.json()
  return data
}

//Función para traer los comentarios de un post, correspondiente al ID ingresado.

export  async function getCommentsByPostId(postId){
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`)
  const data = await res.json()
  return data
}