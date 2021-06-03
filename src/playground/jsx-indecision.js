console.log("App.js is running")


const app = {
    title: 'Indecision App',
    subtitle: 'Randal',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value ='';
        renderOut();

    }

};

const clearall = () => {
    app.options = [];
    renderOut();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
};

const appRoot = document.getElementById('app');


const renderOut = () =>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>a{app.subtitle}</p>}
            
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
            <button disabled ={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearall}>Remove all</button>
            <ol>

            {
                app.options.map((options) => {
                    return <li key = {options}>{options}</li>
                })
            }

            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
        );

        ReactDOM.render(template,appRoot);

};

renderOut();
