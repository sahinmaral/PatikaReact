import {render,screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import EmojiResults from './EmojiResults'
import App from './App'
import React from "react"
import emojiList from "./emojiList.json";
import '@testing-library/jest-dom';

test('Check all of the emoji datas renders correctly',()=>{
    const component = render(<EmojiResults emojiData={emojiList}/>)
    const emojiDivs = component.container.querySelectorAll('.component-emoji-result-row')
    expect(emojiDivs.length).toEqual(1820)
})

test('Check if emoji list rendered again after selecting any emoji',()=>{
    const component = render(<App/>)
    const input = component.container.querySelector('input')
    userEvent.type(input,'Blush')

    const emoji = screen.getByText('Blush')
    expect(emoji)
})

test('Check if selected emoji is copied',()=>{
    render(<App/>)
    const emoji = screen.getByText('100')

    document.execCommand = jest.fn();
    userEvent.click(emoji) 

    expect(document.execCommand).toBeCalledWith('copy')
    
    const copyEmoji = window.ClipboardData;
    expect(copyEmoji).toEqual(emoji.value)    
})