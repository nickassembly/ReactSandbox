const rootNode = document.getElementById('app');

// Hooks -- JS objects attached to (other JS objects) nodes of the fiber tree

const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />);
console.dir(rootNode);

function App() {
    return (
        <>
            <h1>Counters</h1>
            <section>
                <Counter name="One" />
            </section>
        </>
    );
}

function Counter(props) {

    const [numOfClicks, setNumOfClicks] = React.useState({ total: 0 });

    React.useEffect(() => {
        const message = `Number of clicks is: ${numOfClicks.total}`;
        const id = setInterval(() => {
            console.log(message);
        }, 2000);

        return () => {
            clearInterval(id);
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







