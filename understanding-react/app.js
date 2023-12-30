const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

/* Objects */
class CounterObj {
    constructor(id, name, show, total) {
        this.id = id;
        this.name = name;
        this.show = show;
        this.total = total;
    }
}
/* End Objects */

const CounterContext = React.createContext(3);

function App() {
    const [counterData, setCounterData] = React.useState([
        new CounterObj(1, 'A', true, 0),
        new CounterObj(2, 'B', true, 0),
        new CounterObj(3, 'C', true, 0)
    ]);

    const increment = (index) => {
        const newData = [...counterData];
        newData[index].total = newData[index].total + 1;
        setCounterData(newData);
    }

    const decrement = (index) => {
        const newData = [...counterData];
        const decrementedCounter = newData[index].total - 1;
        newData[index].total = decrementedCounter >= 0 ? decrementedCounter : 0;
        setCounterData(newData);
    }

    const contextData = [counterData, increment, decrement];

    return (
        <>
            <CounterContext.Provider value={contextData}>
                <h1>Counters</h1>
                <section>
                    <CounterList />
                    <CounterTools />
                </section>
            </CounterContext.Provider>
        </>
    );
}

function useDocumentTitle(title) {
    return React.useEffect(() => {
        const originalTitle = document.title;
        document.title = title;

        return () => {
            document.title = originalTitle;
        }
    }, [title]);
}

function CounterList() {
    const [contextData, increment, decrement] = React.useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + contextData.map((counter) => {
        return counter.total;
    }).join(', '));
    return (
        <section>
            { contextData.map((counter, index) => (
                <Counter counter={counter} index={index} key={counter.id}/>
            ))}
        </section>
    )
}

function Counter({ counter, index }) {
    const [contextData, increment, decrement] = React.useContext(CounterContext);

    function handleIncrementClick() {
        increment(index);
    }

    function handleDecrementClick() {
        decrement(index);
    }

    return (
        <dl className="counter">
            <dt>{counter.name}</dt>
            <dd className="counter__value">
                { counter.total > 0 ? <button className="button" onClick={handleDecrementClick}>
                    -
                </button> : <div className="counter__empty"></div> }
                {counter.total}
                <button className="button" onClick={handleIncrementClick}>
                    +
                </button>
            </dd>
        </dl>
    );
}

function CounterTools() {
    return (
        <CounterSummary />
    )
}

function CounterSummary() {
    const [contextData, increment, decrement] = React.useContext(CounterContext);
    const sortedData = [...contextData].sort((a, b) => {
        return b.total - a.total;
    });

    const filteredSortedData = sortedData.filter(counter => { return counter.show });
    return (
        <section>
            Summary: { filteredSortedData.map((counter, index) => (
                <CounterSummaryDetail counter={counter} key={counter.id} />
            )) }
        </section>
    )
}

const CounterSummaryDetail = React.memo(function CounterSummaryDetail ({ counter }) {
    console.log("Rendering CounterSummaryDetail");
    return (
        <p>{counter.name} ({counter.total})</p>
    )
})



