const newPostTextarea = document.querySelector('textarea[name="post-content"]');
const wordsLeft = document.querySelector('#words-left');

async function postTextareaFunc() {
    if (newPostTextarea.value.trim().length >= 4900) {
        wordsLeft.classList.add('alert');
    } else {
        wordsLeft.classList.remove('alert');
    }
    wordsLeft.textContent = (5000 - newPostTextarea.value.trim().length) + ' characters left';

    newPostTextarea.style.minHeight = '150px';

    if (newPostTextarea.scrollHeight > 150) {
        newPostTextarea.style.height = newPostTextarea.scrollHeight + 2 + 'px';
    }
}

newPostTextarea.addEventListener('input', postTextareaFunc);