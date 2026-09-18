import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders "SDLC Agent Demo" centered', () => {
    render(<Footer />)
    const el = screen.getByText('SDLC Agent Demo')
    expect(el).toBeInTheDocument()
    expect(el).toHaveStyle('text-align: center')
  })
})
