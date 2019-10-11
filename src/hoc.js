import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        This is {props.info}
    </div>
)

const requireAuth = (Ab) => {
    return (props) => (
        <div>
            {props.isAuth && <p>Private</p>}
            <Ab {...props} />
        </div>

    )
}

const AuthInfo = requireAuth(Info)

ReactDOM.render(<AuthInfo isAuth={true} info="There are details" />, document.getElementById('app'))
