import {fireEvent, render, screen} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PostCard from '../components/PostCard'

describe('PostCard', () => {
    it('Mostra titolo del post', () => {
        render(<PostCard title="Titolo del post" excerpt={'Estratto del post'} />)

        expect(screen.getByText('Titolo del post')).toBeInTheDocument();
    })

    it('Mostra contenuto del post', () => {
        render(<PostCard title="Titolo del post" excerpt={'Estratto del post'} />)

        expect(screen.getByText('Estratto del post')).toBeInTheDocument();
    })

    // In partenza il Post non mostra il contenuto
    it('Il contenuto del post è nascosto',() => {
        render(<PostCard title={'Titolo del post'} excerpt={'Estratto del post'} content={'Contenuto del post'}/>)

        expect(screen.queryByText('Contenuto del post')).not.toBeInTheDocument()
    })

    // Una volta premuto il pulsante espandi viene mostrato tutto il contenuto
    it('Il contenuto del post è visibile cliccando su Espandi', () => {
        render(<PostCard title="Titolo del post" excerpt="Estratto del post" content="Contenuto del post" />)

        fireEvent.click(screen.getByRole('button', { name: /espandi/i }))

        expect(screen.getByText('Contenuto del post')).toBeInTheDocument()
    })

    // Una volta premuto il pulsante comprimi non viene mostrato tutto il contenuto
    it('Il contenuto del post è nascosto cliccando su Comprimi', () => {
        render(<PostCard title="Titolo del post" excerpt="Estratto del post" content="Contenuto del post" />)

        fireEvent.click(screen.getByRole('button', { name: /espandi/i }))
        fireEvent.click(screen.getByRole('button', { name: /comprimi/i }))

        expect(screen.queryByText('Contenuto del post')).not.toBeInTheDocument()
    })

    // Una volta premuto il pulsante Espandi il testo del bottone diventa Comprimi
    it('Cliccando su Espandi il pulsante diventa Comprimi', () => {
        render(<PostCard title="Titolo del post" excerpt="Estratto del post" content="Contenuto del post" />)

        fireEvent.click(screen.getByRole('button', { name: /espandi/i }))

        expect(screen.getByRole('button', { name: /comprimi/i })).toBeInTheDocument()
    })

    it('Cliccando su Comprimi il pulsante torna a Espandi', () => {
        render(<PostCard title="Titolo del post" excerpt="Estratto del post" content="Contenuto del post" />)

        fireEvent.click(screen.getByRole('button', { name: /espandi/i }))
        fireEvent.click(screen.getByRole('button', { name: /comprimi/i }))

        expect(screen.getByRole('button', { name: /espandi/i })).toBeInTheDocument()
    })
})