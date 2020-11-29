import { makeRequest, Errors } from "./authHelpers.js";
import Auth from "./Auth.js";

/*
makeRequest('login', 'POST', {
  password: 'user1',
  email: 'user1@email.com'
  });*/

const errors = new Errors("errors");
const loginAuth = new Auth(errors);

document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();
  loginAuth.login(getPosts);
});

async function getPosts() {
  try {
    const data = await makeRequest("posts", "GET", null, loginAuth.token);
    let posts = document.getElementById("posts");
    posts.innerHTML = "";
    console.log(data);
    data.forEach((stuff) => {
      let li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          `${stuff.userId}: ${stuff.title} - ${stuff.content}`
        )
      );
      posts.appendChild(li);
    });
    errors.clearError();
  } catch (error) {
    errors.clearError(error);
  }
}

document.getElementById("makeAPost").addEventListener("submit", (event) => {
  event.preventDefault();
  makePost();
});

async function makePost() {
  const form = document.forms.makeAPost;

  if (form.newTitle.validity.valid && form.newPost.validity.valid) {
    const data = {
      title: form.newTitle.value,
      content: form.newPost.value,
    };
    try {
      const res = await makeRequest("posts", "POST", data, loginAuth.token);
      form.newTitle.value = "";
      form.newPost.value = "";
      getPosts();
    } catch (error) {
      errors.handleError(error);
    }
  } else {
    myErrors.displayError({ message: 'Title and Content are required' });  
  }
}
