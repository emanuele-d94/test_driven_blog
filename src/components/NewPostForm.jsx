import { useState } from 'react'

export default function NewPostForm({ onSubmit }) {
    const [error, setError] = useState('')
    const [title, setTitle] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [content, setContent] = useState('')


    function handleSubmit(event) {
        event.preventDefault()

        if (title.trim() === '' || excerpt.trim() === '' || content.trim() === '') {
            setError('Compila titolo, estratto e contenuto')
            return
        } else {
            setError('')
        }

        onSubmit({title, excerpt, content })

        resetForm()
    }


    function resetForm(){
        setTitle('')
        setExcerpt('')
        setContent('')
    }

    return (
        <div>
            {error && <p role="alert">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titolo</label>
                <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />

                <label htmlFor="excerpt">Estratto</label>
                <input id="excerpt" type="text" value={excerpt} onChange={e => setExcerpt(e.target.value)} />

                <label htmlFor="content">Contenuto</label>
                <textarea id="content" value={content} onChange={e => setContent(e.target.value)} />

                <button type="submit">Pubblica</button>
            </form>
        </div>
    )
}