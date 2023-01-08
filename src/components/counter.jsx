import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        //tags: ['tag1','tag2','tag3']
    };
/*
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
*/
    handleIncrement = () => {
        this.setState({value: this.state.value + 1});
    }
    handleDecrement = () => {
        if(this.state.value  !== 0){
            this.setState({value: this.state.value - 1});
        }; 
    };
    
    render() { 
        return (
        
        <div>
            {this.props.children}
            <span style={{fontSize:12}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className='btn btn-info btn-sm'>Increment</button>
            <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm'>Delete</button>

        </div>
        
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { value: value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;



//in render
//<ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)} </ul>