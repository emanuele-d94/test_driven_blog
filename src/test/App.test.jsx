import App from '../components/App.jsx'
import {render, screen, fireEvent} from "@testing-library/react";
import {savePost} from "../utils/postStorage.js";

describe('App',()=>{
    beforeEach(() => {
        localStorage.clear()
    })

    it("Mostra all'avvio i post salvati in localStorage", () => {
        savePost({ id: 1, title: 'Post salvato', excerpt: 'Estratto', content: 'Contenuto' })

        render(<App />)

        expect(screen.getByText('Post salvato')).toBeTruthy()
    })

    it('Mostra un nuovo post dopo averlo pubblicato dal form', () => {
        render(<App />)

        fireEvent.change(screen.getByLabelText(/titolo/i), { target: { value: 'Nuovo post' } })
        fireEvent.change(screen.getByLabelText(/estratto/i), { target: { value: 'Un estratto' } })
        fireEvent.change(screen.getByLabelText(/contenuto/i), { target: { value: 'Un contenuto' } })
        fireEvent.click(screen.getByRole('button', { name: /pubblica/i }))

        expect(screen.getByText('Nuovo post')).toBeTruthy()
    })

    it('Il post pubblicato resta dopo un nuovo render', () => {
        const { unmount } = render(<App />)

        fireEvent.change(screen.getByLabelText(/titolo/i), { target: { value: 'Post persistente' } })
        fireEvent.change(screen.getByLabelText(/estratto/i), { target: { value: 'Estratto' } })
        fireEvent.change(screen.getByLabelText(/contenuto/i), { target: { value: 'Contenuto' } })
        fireEvent.click(screen.getByRole('button', { name: /pubblica/i }))
        unmount()

        render(<App />)

        expect(screen.getByText('Post persistente')).toBeTruthy()
    })
})