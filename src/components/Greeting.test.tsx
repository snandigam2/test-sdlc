import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting', () => {
  it('renders "Hello React"', () => {
    render(<Greeting />)
    expect(screen.getByText('Hello React')).toBeInTheDocument()
  })
})
