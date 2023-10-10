// functional component
const Cat = (props) => {
    const [isHungry, setIsHungry] = React.useState(true);
    return(
        <>
            <p>Iam {props.name}, and Iam {isHungry ? "hungry" : " full"}!</p>
            <button onClick={()=>{
                setIsHungry(false);
            }} disabled={!isHungry}>
            {isHungry ? "Pour me some milk, please!" : "Thank you!"}
            </button>
        </>
    );
}

const Cafe = () => {
    return(
        <>
            <Cat name="Munskustrap"/>
            <Cat name="Spot"/>
        </>
    );
}

const myElement = <Cafe />
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
