import React from 'react'
import AddOption from './AddOption.js';
import Action from './Action.js';
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined

    };

    handleDeleteOptions = () => {
        //old sytax state
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });


        this.setState(() => ({
            options: []
        }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((options) =>{
                return optionToRemove !== options ;
            })
        }));
    };

    handlePick =() => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(randomNum);
        
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid Value to add Item'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    };

    handleClearSelectedOption = () =>{
        this.setState(() => ({
            selectedOption: undefined
        }));

    };


    componentDidMount () {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options: options}));
            }
        } catch (e) {

        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)   
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    
    
    render() {
        
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>   
                <Header subTitle={subTitle}/>
                    <div className = 'container'>
                        <Action 
                            hasOptions = {this.state.options.length}
                            handlePick = {this.handlePick}
                        
                        />
                        <div className ='widget'>
                            <Options  
                                options = {this.state.options}
                                handleDeleteOptions = {this.handleDeleteOptions}
                                handleDeleteOption ={this.handleDeleteOption}
                            />
                            <AddOption
                                handleAddOption = {this.handleAddOption}
                            />
                        </div>

                        <OptionModal 
                            selectedOption = {this.state.selectedOption}
                            handleClearSelectedOption = {this.handleClearSelectedOption}
                        />
                        
                    </div>
            </div>
        );
    }
}

export default IndecisionApp