import {expect} from "vitest";
import {getPosts, savePost} from "../utils/postStorage.js"

describe('postStorage', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('Ritorna array vuoto se non ci sono post salvati', () => {
        expect(getPosts()).toEqual([])
    })

    it('Ritorna array con un elemento se con un post salvato',()=>{
        const post = { id: 1, title: 'Primo post', excerpt: 'Estratto', content: 'Contenuto' }

        savePost(post)

        expect(getPosts()).toEqual([post])
    })

    it('Aggiunge un post in testa se c\'è già un\'elemento salvato',()=>{
        const post1 = { id: 1, title: 'Primo post', excerpt: 'Estratto', content: 'Contenuto' }
        const post2 = { id: 2, title: 'Secondo post', excerpt: 'Estratto', content: 'Contenuto' }

        savePost(post1)
        savePost(post2)

        expect(getPosts()).toEqual([post2,post1])

    })

    it('ritorna un array vuoto se i dati salvati sono corrotti', () => {
        localStorage.setItem('blog-posts', 'questo non è json')

        expect(getPosts()).toEqual([])
    })
})

