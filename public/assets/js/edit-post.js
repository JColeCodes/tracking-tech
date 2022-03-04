const editPostFornm = document.querySelector('.edit-post-form');
const postErrorMes = document.querySelector('.error');

async function editPost(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    const pageUrl = window.location.toString().split('/');
    const id = pageUrl[pageUrl.length - 1];

    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace(`/post/${id}`);
        } else {
            postErrorMes.textContent = 'There has been in error in editing your post';
        }
    }
}

editPostFornm.addEventListener('submit', editPost);