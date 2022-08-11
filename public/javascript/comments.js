//POST a new comment using submit button 
async function commentFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="comment-title"]').value.trim();
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();


  if (title && comment_text) {
    console.log("click")
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        title,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);
