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
            </section>
        </>
    );
}//

function Counter(props) {

    // use reducer part 2
    const [state, dispatch] = React.useReducer(() => {

    }, { clicks: 0 });

    return (
        <article>
            <h2> Counter {props.name}</h2>
            <p> You clicked {state.clicks} times </p>
            <button className="button">Click Me</button>
        </article>
    );
}







