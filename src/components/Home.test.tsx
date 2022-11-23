import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { Home } from "../../src/components/home/home"
console.log(Home)
describe('Home', () => {
    afterEach(cleanup)
    
    it("Should render", () => {
        render(<Home />)
    })

    it('Should render title correcly', () => {
        render(<Home />)
        screen.getByText('Home')
    })
})