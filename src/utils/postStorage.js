const STORAGE_KEY = 'blog-posts'

export function getPosts() {
    const stored = localStorage.getItem(STORAGE_KEY)

    try{
        return stored ? JSON.parse(stored) : []
    } catch {
        return []
    }

}

export function savePost(post) {
    let posts = getPosts()
    posts.push(post)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}