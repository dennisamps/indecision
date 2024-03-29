import React from 'react';


class AddOption extends React.Component{
    state = {
        error:undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim(); //this looks at the form element and the name of the form that we gave to it is 'options' and we are pulling that value
        
        const error = this.props.handleAddOption(option);

        this.setState(() => ({
            error: error
        }))

       if(!error) {
           e.target.elements.option.value = '';
       }
       
    };


    render(){
        return (
            <div>
                {this.state.error && <p className = 'add-option-error'>{this.state.error}</p>}
                <form className= 'add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type='text' name='option'></input>
                    <button className ='button'>Add Option</button>
                </form>
            </div>           
        );
    }
}

export default AddOption