import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    state = { 
        counters:[
            { id: 0, value: 0}
        ]
    }; 
    

    handleDelete = (counterId)=>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    };
    /*
    findEmptyId () {
        const counters = this.state.counters;
        let emptyId = counters.length;
        for (let index = 0; index < counters.length; index++) {
            if(counters[index].id > emptyId){
                emptyId = counters[index].id; 
                console.log(counters[index].id)
            };
        }
        console.log("empty: ",emptyId);
        return emptyId
    }
    handleAdd = () => {
        console.log("add handler called");
        const counters = this.state.counters;
        let numCounter = counters.length;
        console.log(numCounter, counters.length)

        for (let index = 0; index < counters.length; index++) {

            if(counters[index].id == this.findEmptyId()){
                numCounter = index;
            }
            else if(counters[index].id === numCounter){
                numCounter++;
            }
        }
        counters.push({id: numCounter, value: 0});
        this.setState({counters});
    };
    */

    handleRset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    }

    render() { 

        return (
            <React.Fragment>
                <button onClick={this.handleReset} className='badge bg-primary btn-sm m-2'>Reset</button>
                <div>{this.state.counters.map(counter=>( 
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter}> 
                    <h4>Counter #{counter.id}</h4>
                    </Counter>))}
                </div>
                <button onClick={this.handleAdd} className='badge bg-primary bg-sm m-2'>Add</button>
            </React.Fragment>
        );
    };
};
 
export default Counters;