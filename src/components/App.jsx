import {useEffect, useState} from "react";
import {getPosts,savePost} from "../utils/postStorage.js";
import PostList from "./PostList.jsx";
import NewPostForm from "./NewPostForm.jsx";

export default function App(){

    const [posts, setPosts] = useState(() => getPosts())

    function handleAddPost(data){
        const newPost = { id: Date.now(), ...data }   // l'id nasce qui
        savePost(newPost)
        setPosts(prev => [...prev, newPost])        }

    return (
        <div>
            <PostList posts={posts}/>
            <NewPostForm onSubmit={handleAddPost} />
        </div>
    )
}