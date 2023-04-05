let postId;

const getPostIdFromURL = () => {
  const id = window.location.search;
  const splitString = id.split("=");

  postId = splitString[1];
};

const getSinglePost = () => {
  getPostIdFromURL();

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      response.json().then((data) => {
        console.log("POST DATA", data);
      });
    })
    .catch((error) => console.log(error));
};

getSinglePost();

