import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import App from './App'

describe('App', () => {
    afterEach(cleanup)
    it('Should render', (): void => {
        render(<App />)
    })

})