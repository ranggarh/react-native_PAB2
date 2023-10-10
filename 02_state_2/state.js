class MyApp extends React.Component{
    // Contructor Function
    constructor(){
        super();
        this.state ={
            title_1: "What are you studying?",
            title_2: "Learn what else?"
        };
    }

    //Arrow Function
    handleButtonClick = () =>{
        this.setState({
            title_1: "Learn Javascript",
            title_2: "Learn React"
        });
    }

    render() {
        return (
            <div>
                <h3>{this.state.title_1}</h3>
                <h3>{this.state.title_2}</h3>
                <button onClick={this.handleButtonClick}>Let's Learn Programming</button>
            </div>
        )
    }

}
const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);

