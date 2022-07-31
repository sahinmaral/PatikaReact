import { createSlice } from "@reduxjs/toolkit";

const exampleText = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

const initialState = {
  text: "",
  isShowingExample: false,
};

export const markdownSlice = createSlice({
  initialState,
  name: "markdown",
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setIsShowingExample: (state) => {
      if (!state.isShowingExample) {
        state.text = exampleText;
      } else {
        state.text = "";
      }

      state.isShowingExample = !state.isShowingExample;
    },
  },
});

export const getIsShowingExample = (state) => state.markdown.isShowingExample;
export const getText = (state) => state.markdown.text;
export const { setText,setIsShowingExample } = markdownSlice.actions;
export default markdownSlice.reducer;
