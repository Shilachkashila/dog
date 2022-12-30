const likeButton = document.querySelector('.like-button')

let count = 0;

likeButton.addEventListener('click', () => {
  ++count;
  console.log(count)
  document.getElementById('like-sum').innerHTML = count;
});

