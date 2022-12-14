const post_id = document.querySelector('input[name="post-id"]').value;


const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;

    // edit post

    const response = await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/api/dashboard');
    } else {
        alert('Failed to update your post');
    }
    document.location.replace('/api/dashboard');
};

// delete post

const deleteClickHandler = async () => {
    await fetch(`/api/post/${post_id}`, {
        method: 'DELETE'
    });

    document.location.replace('/api/dashboard');
    // document.location.reload();
};
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);
