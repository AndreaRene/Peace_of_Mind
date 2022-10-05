const post_id = document.querySelector('input[name="post-id"]').value;

const deleteClickHandler = async () => {
    await fetch(`/api/post/${post_id}`, {
        method: 'DELETE'
    });

    // document.location.replace('/api/dashboard');
    document.location.reload();
};
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);