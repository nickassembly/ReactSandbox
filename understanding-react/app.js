const rootNode = document.getElementById('app');

// Hooks -- JS objects attached to (other JS objects) nodes of the fiber tree

const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />);
console.dir(rootNode);

function App() {
    const [swapCounter, setSwapCounter] = React.useState(0);

    function handleClick() {
        setSwapCounter(!swapCounter);
    }

    let counterOne = null;
    if (!swapCounter) {
        counterOne = <Counter name="One" />
    }

    return (
        <>
            <h1> Counters </h1>
            <section>
                {counterOne}
                {swapCounter ? <Counter name="Two" /> : null}
            </section>
            <p>
                <button className="button" onClick={handleClick}>Swap Counters</button>
            </p>
        </>
    );
}

function Counter(props) {

    const [numOfClicks, setNumOfClicks] = React.useState({ total: 0 });

    React.useEffect(() => {
        console.log("In Use Effect " + props.name);
        document.title = `Clicks: ${numOfClicks.total}`

        return () => {
            console.log("Unmounting " + props.name);
        }

    }, [numOfClicks.total]);

    function handleClick() {
        setNumOfClicks({ ...numOfClicks, total: numOfClicks.total + 1 });
    }


    return (
        <article>
            <h2> Counter {props.name}</h2>
            <p> You clicked {numOfClicks.total} times </p>

            <p>
                <button className="button" onClick={handleClick}>Click Me</button>
            </p>

        </article>
    );
}







