import {fireEvent, render, screen} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PostList from '../components/PostList'

describe('PostList', () => {

    it('Mostra un messaggio quando non ci sono post', ()=>{
        render(<PostList posts={[]} />)

        expect(screen.getByText(/nessun post/i)).toBeInTheDocument()
    })

    it('Mostra una PostCard per ogni elemento dell\'array posts',()=>{
        const posts = [
            {id:1,title:"Post Uno", excerpt:'Estratto Uno', content:"Contenuto Uno"},
            {id:2,title:"Post Due", excerpt:'Estratto Due', content:"Contenuto Due"},
            {id:3,title:"Post Tre", excerpt:'Estratto Tre', content:"Contenuto Tre"},
        ]

            render(<PostList posts={posts} />)

            expect(screen.getByText('Post Uno')).toBeInTheDocument()
            expect(screen.getByText('Post Due')).toBeInTheDocument()
            expect(screen.getByText('Post Tre')).toBeInTheDocument()
    })

    it('Verifica che per ogni post ci sia un heading h1',()=>{
        const posts = [
            {id:1,title:"Post Uno", excerpt:'Estratto Uno', content:"Contenuto Uno"},
            {id:2,title:"Post Due", excerpt:'Estratto Due', content:"Contenuto Due"},
            {id:3,title:"Post Tre", excerpt:'Estratto Tre', content:"Contenuto Tre"},
        ]

        render(<PostList posts={posts} />)

        const titles = screen.getAllByRole('heading', { level: 1 })
        expect(titles).toHaveLength(3)
    })

})