const rootNode = document.getElementById('app');

// Hooks -- JS objects attached to (other JS objects) nodes of the fiber tree

const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />);
console.dir(rootNode);

function App() {
    return (
        <>
            <h1> Counters </h1>
            <section>
                <Counter name="One" />
                <Counter name="Two" />
            </section>
        </>
    );
}

function Counter(props) {

    const [numOfClicks, setNumOfClicks] = React.useState(0);
    const [myName, setMyName] = React.useState("Keller");
    const [state, dispatch] = React.useReducer(() => { }, "Car");

    return (
        <article>
            <h2> Counter {props.name}</h2>
            <p> You clicked {numOfClicks} times </p>
            <button className="button" onClick={() => {
                setNumOfClicks(numOfClicks + 1);
            }}>Click Me</button>
        </article>
    );
}







