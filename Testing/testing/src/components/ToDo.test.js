import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToDo from "./ToDo"

describe('ToDo tests',()=>{
    let component,textInput,buttonAdd

    beforeEach(()=>{
        component = render(<ToDo/>)
        buttonAdd = component.getByText('Add')
        textInput = component.getByPlaceholderText('Enter text')
    })

    test('It has got 3 items at start',()=>{
        const items = screen.getAllByText(/Item/i)
        expect(items.length).toEqual(3)
    })

    test('Check entered item if text entered',()=>{
        userEvent.type(textInput,'Learn React Testing')
        userEvent.click(buttonAdd)
        expect(component.container).toHaveTextContent('Learn React Testing')
    })

})