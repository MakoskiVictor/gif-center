import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Home } from "./Home"
console.log(Home)
describe('Home', (): void => {
    afterEach(cleanup)
    
    it("Should render", (): void => {
        render(<Home />)
    })

    it('Should render title correcly', (): void => {
        render(<Home />)
        screen.getByText('Home')
    })

    it('Should render an image', (): void => {
        render(<Home/>)
        screen.getByRole('gifImage')
    })
})