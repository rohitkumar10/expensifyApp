import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpense } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { firebase } from'./firebase/firebase'
import LoadingPage from './components/LoadingPage'

const store = configureStore()

const jsx = ( 
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, root)
        hasRendered = true
    }
}

const root = document.getElementById('app')
ReactDOM.render(<LoadingPage />, root)

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(() => {
            renderApp()
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    } else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

 