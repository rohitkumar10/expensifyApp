import React from 'react' 
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value 
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onNoteChange = (e) => {
        const note = e.terget.value
        this.setState(() => ({ note }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note 
            })
        }
    }
    render(){
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error"> {this.state.error} </p>}
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus 
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    /> 
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                       date={this.state.createdAt}
                       onDateChange={this.onDateChange}
                       focused={this.state.calenderFocused}
                       onFocusChange={this.onFocusChange}
                       numberOfMonths={1}
                       isOutsideRange={(day) => false}
                    />
                    <textarea 
                    placeholder="Add a note for your expenses"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    />
                    <div>
                        <button className="button"> Save Expense </button> 
                    </div>
                </form>
        )
    }
}
