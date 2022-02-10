const convertBytesToImageElement = (data) => {
  const img = document.createElement('img');
  img.setAttribute('src', `data:image/png;base64,${data.postImage}`);
  console.log(data);
  document.body.appendChild(img);
  data.subPosts.forEach(post => {
    const img = document.createElement('img');
    img.setAttribute('src', `data:image/png;base64,${post.subPostImage}`);
    // console.log(data);
    document.body.appendChild(img);
  })
}