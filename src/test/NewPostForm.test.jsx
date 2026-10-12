import {expect, it} from "vitest";
import {render, screen,fireEvent} from "@testing-library/react";
import NewPostForm from "../components/NewPostForm.jsx";

describe('NewPostForm', () => {
    it('chiama onSubmit con i dati inseriti quando si preme Pubblica', () => {
        const handleSubmit = vi.fn()
        render(<NewPostForm onSubmit={handleSubmit} />)

        fireEvent.change(screen.getByLabelText(/titolo/i), { target: { value: 'Il mio post' } })
        fireEvent.change(screen.getByLabelText(/estratto/i), { target: { value: 'Un estratto' } })
        fireEvent.change(screen.getByLabelText(/contenuto/i), { target: { value: 'Il testo completo' } })
        fireEvent.click(screen.getByRole('button', { name: /pubblica/i }))

        expect(handleSubmit).toHaveBeenCalledWith({
            title: 'Il mio post',
            excerpt: 'Un estratto',
            content: 'Il testo completo',
        })
    })


    it('Dopo l\'invio i campi si svuotano', () => {
        const handleSubmit = vi.fn()
        render(<NewPostForm onSubmit={handleSubmit} />)

        fireEvent.change(screen.getByLabelText(/titolo/i), { target: { value: 'Il mio post' } })
        fireEvent.change(screen.getByLabelText(/estratto/i), { target: { value: 'Un estratto' } })
        fireEvent.change(screen.getByLabelText(/contenuto/i), { target: { value: 'Il testo completo' } })
        fireEvent.click(screen.getByRole('button', { name: /pubblica/i }))

        expect(screen.getByLabelText(/titolo/i).value).toBe('')
        expect(screen.getByLabelText(/estratto/i).value).toBe('')
        expect(screen.getByLabelText(/contenuto/i).value).toBe('')
    })

    it('Non invia il form se titolo, estratto e contenuto sono vuoti', () => {
        const handleSubmit = vi.fn()
        render(<NewPostForm onSubmit={handleSubmit} />)

        fireEvent.click(screen.getByRole('button', { name: /pubblica/i }))

        expect(handleSubmit).not.toHaveBeenCalled()
    })

    it('Mostra un messaggio di errore se il titolo è vuoto', () => {
        render(<NewPostForm onSubmit={vi.fn()} />)

        fireEvent.click(screen.getByRole('button', { name: /pubblica/i }))

        expect(screen.getByRole('alert')).toBeTruthy()
    })

})