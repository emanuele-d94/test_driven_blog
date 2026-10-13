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
    let newPosts = [post,...posts]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts))
}