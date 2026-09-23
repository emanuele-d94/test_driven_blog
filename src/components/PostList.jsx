import PostCard from "./PostCard.jsx";

export default function PostList({ posts }) {
    return (
        <div className="post-list">
            {posts && posts.length > 0
                ? posts.map(post => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        content={post.content}
                    />
                ))
                : 'Nessun post'}
        </div>
    )
}