import { getPosts, getCommentsByPostId } from "./fetchAPI.js";

const postList = document.querySelector(".posts-list");

document.addEventListener("DOMContentLoaded", renderPosts);

//Función para renderizar los posts que se obtienen de la API.

async function renderPosts() {
  const posts = await getPosts();

  //Operaciones para realizar el ordenamiento de los post, dependiendo del último dígito de su ID; 1, 11, 21... 12,22...

  const reversedPosts = posts.map((post) => {
    return { ...post, id: reverseNumber(post.id) };
  });

  const orderedPosts = reversedPosts
    .sort((a, b) => a.id.toString().localeCompare(b.id))
    .map((finalPost) => {
      return { ...finalPost, id: Number(reverseNumber(finalPost.id)) };
    });


  for (const post of orderedPosts) {
    const comments = await getCommentsByPostId(post.id);

    //Ordenamiento ascendente de los comentarios, dependiendo del númro de caracteres del body.

    const orderedComments = comments.sort(
      (a, b) => a.body.length - b.body.length
    );

    postList.innerHTML += `
      <div class="post">
      <div class="post-content">
        <span class="post-title">${post.title}</span><span class="post-info"> Post: ${post.id}</span>
        <p class="post-body">${post.body}</p>
        </div>
        <section class="comments-list comments${post.id}"></section>
      </div>
      `;

    orderedComments.forEach((comment, i) => {
      const commentsList = document.querySelector(`.comments${post.id}`);

      //Se renderiza diferente, dependiendo de si es el primer comentario del post.

      if (i === 0) {  
        commentsList.innerHTML += `
      <div class="comment">
        <div class="arrows">
          <button class="btn-arrow arrow-up"></button>
          <button class="btn-arrow arrow-down"></button>
        </div>
        <span class="comment-email">${comment.email} </span ><span class="comment-info">ID: ${comment.id} • ${comment.name} • postId: ${comment.postId}</span>
        <p>${comment.body}</p>
      </div>
      `;
      } else {
        commentsList.innerHTML += `
      <div class="comment">
        <div class="arrows">
          <button class="btn-arrow arrow-up"></button>
          <button class="btn-arrow arrow-down"></button>
        </div>
        <span class="comment-email">${comment.email} </span ><span class="comment-info">ID: ${comment.id} • ${comment.name}</span>
        <p>${comment.body}</p>
        <button class="btn-thread">Continue this thread  &#10132;</button>
      </div>
      `;
      }
    });
  }
}

//Función para reversar un número; útil para el ordenamiento de los posts.

function reverseNumber(number) {
  const test = number.toString().split("").reverse().join("");
  return test;
}
