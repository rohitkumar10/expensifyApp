import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage
