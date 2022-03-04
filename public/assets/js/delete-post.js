const deleteBtn = document.querySelector('.delete-btn');
const delErrorMes = document.querySelector('.error');

async function deletePost(event) {
    event.preventDefault();

    const id = deleteBtn.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log(response.statusText);
        delErrorMes.textContent = 'There has been in error in deleting your post';
    }
}

deleteBtn.addEventListener('click', deletePost);