const $header = document.querySelector('header');
const $main = document.querySelector('main');
const $postAdd = document.querySelector('.post-add');
const $post = document.querySelector('.post');
const $btnCancle = document.querySelector('.btn-cancle');

function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.querySelector(".img").src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$postAdd.onclick = () => {
  togglePopup();
}
$btnCancle.onclick = () => {
  togglePopup();
}

function togglePopup() {
  $post.classList.toggle('post-active')
}

//if startsWith="/img"
// export function bindEvent() {
//   const $inputFile = $main.querySelector(".input-file");
//   $inputFile.addEventListener("change", e => {
//     readURL(e.target);
//   })
// }