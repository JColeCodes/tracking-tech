const newPostFornm = document.querySelector('.new-post-form');
const postErrorMes = document.querySelector('.error');

async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            postErrorMes.textContent = 'There has been in error in creating your post';
        }
    }
}

newPostFornm.addEventListener('submit', newPost);