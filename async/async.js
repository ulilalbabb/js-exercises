const reloadButton = document.getElementById("btn-reload")
const postContainer = document.getElementById("posts-container")

const loadData = async () => {
    postContainer.innerHTML = '<p>Loading...</p>'
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const posts = await response.json()

        postContainer.innerHTML = " "

        posts.map(post => {
            const postDiv = document.createElement("div")
            postDiv.classList.add('post')
            postDiv.innerHTML = `<h3>${post.body}</h3>`
            postContainer.appendChild(postDiv)
        })
    } catch (err) {
        postContainer.innerHTML = `<p>${err.message}</p>`
    }
}

reloadButton.addEventListener('click', loadData)

loadData()