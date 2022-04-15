import React from 'react'

import { Button } from 'antld-button-demo-sahinmaral'
import 'antld-button-demo-sahinmaral/dist/index.css'

const App = () => {
  return (
    <div>
      <Button text="Default Button"/>
      <Button text="Primary Button" type="primary"/>
      <Button text="Dashed Button" type="dashed"/>
      <Button text="Text Button" type="text"/>
      <Button text="Link Button" href="https://www.google.com" type="link"/>
    </div>
  )
}

export default App
