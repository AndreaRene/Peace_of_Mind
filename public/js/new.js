const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/api/dashboard');
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);