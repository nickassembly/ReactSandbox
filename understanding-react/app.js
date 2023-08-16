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

// shallow equality
function Counter(props) {

    const [numOfClicks, setNumOfClicks] = React.useState({ total: 0 });

    function handleClickWrong() {
        numOfClicks.total = numOfClicks.total + 1;
        setNumOfClicks(numOfClicks);
    }

    function handleClick() {
        setNumOfClicks({ ...numOfClicks, total: numOfClicks.total + 1 });

    }


    return (
        <article>
            <h2> Counter {props.name}</h2>
            <p> You clicked {numOfClicks.total} times </p>
            <p>
                <button className="button" onClick={handleClickWrong}>Click Me (won't work) </button>
            </p>
            <p>
                <button className="button" onClick={handleClick}>Click Me</button>
            </p>

        </article>
    );
}







