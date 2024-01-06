import { useEffect, useReducer, useContext, useMemo, useId, useCallback, createContext, memo } from 'react';
import './App.css';


  class CounterObj {
    constructor(id, name, tab, total) {
        this.id = id;
        this.name = name;
        this.tab = tab;
        this.total = total;
    }
}

const CounterContext = createContext(null);
const CounterDispatchContext = createContext(null);
const TabContext = createContext(null);
const TabDispatchContext = createContext(null);

function counterReducer(counterData, action) {
    switch (action.type) {
        case 'increment': {
            return counterData.map((counter) => {
                if (counter.id === action.id) {
                    return {...counter, total: counter.total + 1}
                } else {
                    return counter;
                }
            })
        }
        case 'decrement': {
            return counterData.map((counter) => {
                if (counter.id === action.id) {
                    return {...counter, 
                        total: counter.total > 0 ? counter.total - 1 : 0 }
                } else {
                    return counter;
                }
            })
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

function tabReducer(visibleTab, action) {
    switch (action.type) {
        case 'change-tab': {
           if (action.tab === visibleTab) {
                return visibleTab;
           } else {
                return action.tab;
           }
        }
      
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

function App() {
    const [counterData, counterDispatch] = useReducer(counterReducer, 
    [
        new CounterObj(1, { longName:'Counter A', shortName: 'A'}, 1, 0),
        new CounterObj(2, { longName:'Counter B', shortName: 'B' }, 2, 0),
        new CounterObj(3, { longName:'Counter C', shortName: 'C' }, 1, 0)
    ]);

    const [visibleTab, tabDispatch] = useReducer(tabReducer, 1);

    return (
        <>
            <CounterContext.Provider value={counterData}>
                <CounterDispatchContext.Provider value={counterDispatch}>
                    <TabContext.Provider value={visibleTab}>
                        <TabDispatchContext.Provider value={tabDispatch}>
                            <h1>Counters</h1>
                                <section>
                                    <CounterList />
                                    <CounterTools />
                                </section>
                        </TabDispatchContext.Provider>
                    </TabContext.Provider>
                </CounterDispatchContext.Provider>
            </CounterContext.Provider>
        </>
    );
}

function useDocumentTitle(title) {
    return useEffect(() => {
        const originalTitle = document.title;
        document.title = title;

        return () => {
            document.title = originalTitle;
        }
    }, [title]);
}

function CounterList() {
    const counterData = useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join(', '));
    return (
        <section>
            { counterData.map((counter) => (
                <Counter counter={counter} key={counter.id}/>
            ))}
        </section>
    )
}

function Counter({ counter}) {
    const counterDispatch = useContext(CounterDispatchContext);
    const visibleTab = useContext(TabContext);
    const id = useId();

    // having strict mode on exposes that this effect is running twice and not being cleared properly
    useEffect(() => {
        let timerId;
        let seconds = 0;

        if(counter.tab === visibleTab && counter.name.shortName === 'A') {
            timerId = setInterval(() => {
              seconds++;
              console.log(`Time since ${counter.name.shortName} was availble and/or clicked: ${seconds}`)
            }, 1000);
        }

        return () => {
            clearInterval(timerId);
        }

    }, [counter.total]);

    function handleIncrementClick(event) {
        counterDispatch({ type: 'increment', id: counter.id});
        event.preventDefault();
    }

    function handleDecrementClick(event) {
        counterDispatch({ type: 'decrement', id: counter.id})
        event.preventDefault();
    }

    return (
        <dl className="counter">
            <dt>{counter.name.longName}</dt>
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
    const counterData = useContext(CounterContext);
    const visibleTab = useContext(TabContext);
    const tabDispatch = useContext(TabDispatchContext);

    const filteredSortedData = useMemo(() => {
        console.log("Filtering data");
        return counterData.filter(counter => { return counter.tab === visibleTab });
    }, [counterData, visibleTab]);

    const setVisibleTab1 = useCallback((event) => {
        tabDispatch({ type: 'change-tab', tab: 1});
        event.preventDefault();
    }, []);

    const setVisibleTab2 = useCallback((event) => {
        tabDispatch({ type: 'change-tab', tab: 2});
        event.preventDefault();
    }, []);

    return (
        <section>
            <CounterSummaryHeader setVisibleTab1={setVisibleTab1} setVisibleTab2={setVisibleTab2} />
                { filteredSortedData.map((counter) => (
                    <CounterSummaryDetail name={counter.name} total={counter.total} key={counter.id} />
                )) }
        </section>
    )
}

const CounterSummaryHeader = memo(function CounterSummaryHeader ({ setVisibleTab1, setVisibleTab2 }) {
    return (
        <header>
            <a href="#" onClick={setVisibleTab1}>Tab 1</a>&nbsp;&nbsp; &nbsp;&nbsp;
            <a href="#" onClick={setVisibleTab2}>Tab 2</a>&nbsp;&nbsp; &nbsp;&nbsp;
        </header>
    )
});

const CounterSummaryDetail = memo(function CounterSummaryDetail ({ name, total }) {
    const cName = {...name, shortName: name.shortName + ':' };


    return (
        <p>{cName.shortName} ({total})</p>
    )
})

export default App;