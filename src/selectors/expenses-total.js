export default (expenses) => {
    return expenses.map((expense) => expense.aount).reduce((sum, value) => sum + value, 0)
}