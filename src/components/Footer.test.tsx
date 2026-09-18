import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders "SDLC Agent Demo"', () => {
    render(<Footer />)
    expect(screen.getByText('SDLC Agent Demo')).toBeInTheDocument()
  })
})
