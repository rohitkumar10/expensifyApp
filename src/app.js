import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { get } from 'https'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 1100 }))
store.dispatch(addExpense({ description: 'Gas bill ', createdAt: 1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 110009 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const root = document.getElementById('app')
ReactDOM.render(jsx, root)
 