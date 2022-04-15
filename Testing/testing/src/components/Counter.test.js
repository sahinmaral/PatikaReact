import { screen, render } from '@testing-library/react'
import Counter from "./Counter"
import userEvent from '@testing-library/user-event'

describe('Counter tests', () => {

    let header,increaseButton,decreaseButton

    beforeEach(()=>{
        render(<Counter />)
        header = screen.getByText(0)
        increaseButton = screen.getByText('Increase')
        decreaseButton = screen.getByText('Decrease')
    })

    test('Counter increase test', () => {
        userEvent.click(increaseButton)
        expect(header).toHaveTextContent(1)
    })

    test('Counter decrease test', () => {
        userEvent.click(decreaseButton)
        expect(header).toHaveTextContent(-1)
    })

})

