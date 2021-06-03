class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption =this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount() {
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

    handleDeleteOptions(){
        //old sytax state
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });


        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((options) =>{
                return optionToRemove !== options ;
            })
        }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(randomNum);
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid Value to add Item'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    }
    
    render() {
        
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>   
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions = {this.state.options.length}
                    handlePick = {this.handlePick}
                
                />
                
                <Options  
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption ={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subTitle}</h2>}
        </div>

    );
};

Header.defaultProps = {
    title: 'Indecision'
};



const Action = (props) => {
    return (
        <div>
            <button 
                onClick = {props.handlePick}
                disabled = {!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}



const Options = (props) => {
    return (
        <div>
            <button onClick ={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((options) => (
                    <Option 
                        key = {options} 
                        optionText={options}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }      
        </div>           
    );
}

const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            
           
           >
            remove
        </button>
        </div>           
    );
}



class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim(); //this looks at the form element and the name of the form that we gave to it is 'options' and we are pulling that value
        
        const error = this.props.handleAddOption(option);

        this.setState(() => ({
            error: error
        }))

       if(!error) {
           e.target.elements.option.value = '';
       }
       
    }


    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
                </form>
            </div>           
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



// class Action extends React.Component{
   
//     render(){
//         return (
//             <div>
//                 <button 
//                     onClick = {this.props.handlePick}
//                     disabled = {!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }


// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };