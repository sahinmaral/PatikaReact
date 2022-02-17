import React from 'react'

function Footer() {
    return (
            <footer className="footer">

                {/* <!-- This should be `0 items left` by default --> */}
                <span className="todo-count">
                    <strong>2 </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <button className="selected">All</button>
                    </li>
                    <li>
                        <button>Active</button>
                    </li>
                    <li>
                        <button>Completed</button>
                    </li>
                </ul>

                {/* <!-- Hidden if no completed items are left ↓ --> */}
                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
    )
}

export default Footer