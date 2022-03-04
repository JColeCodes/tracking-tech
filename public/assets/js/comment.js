const commentForm = document.querySelector('.comment-form');
const commentList = document.querySelector('#comment-list');

if (commentList.getElementsByTagName('li').length === 0) {
    const noComment = document.createElement('div');
    noComment.textContent = 'This post currently has no comments';
    commentList.append(noComment);
}

async function commentSubmit(event) {
    event.preventDefault();

    const comment_body = document.querySelector('textarea[name="comment"]').value.trim();

    let post_id = window.location.toString().split('/');
    post_id = post_id[post_id.length - 1].split('#')[0];

    if (comment_body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_body
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error');
            errorMessage.textContent = 'There has been an issue with posting your comment.'
            commentForm.appendChild(errorMessage);
        }
    }
}

commentForm.addEventListener('submit', commentSubmit);