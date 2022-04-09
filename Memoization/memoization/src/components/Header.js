import React from 'react'

function Header({ data , increment}) {
    console.log('Header Component Re-rendered! ')

    return (
        <div>
            Header

            <br/><br/>

            {/* <code>{JSON.stringify(data)}</code> */}
            <button onClick={increment}>Increase</button>
        </div>
    )
}

export default React.memo(Header)