// const rootNode = document.getElementById('app');
// const root = ReactDOM.createRoot(rootNode);
// root.render(React.createElement(App));

// function App() {
//     return React.createElement("section", null,
//         React.createElement("h1", null, "Counters"),
//         React.createElement("section", null,
//             React.createElement(Counter),
//             React.createElement(Counter))
//     );
// }

// function Counter() {
//     return (
//         React.createElement("article", null,
//             React.createElement("h2", null, "Counter "),
//             React.createElement("p", null, "You clicked 1 times"),
//             React.createElement("button", null, "Click me")
//         )
//     );
// }


let counter = { name: 'Counter' };
let counterValue = 1;

function pureCounter(ctr, value) {
    return `${ctr.name} ${value}`;
}

function notPureCounter(ctr, value) {
    ctr.name = ctr.name + ' Keller';
    counterValue += 1;
    return `${ctr.name} ${value}`;
}

console.log(pureCounter(counter, counterValue));
console.log(pureCounter(counter, counterValue + 1));
console.log(pureCounter(counter, counterValue));
console.log('-------------------');
console.log(notPureCounter(counter, counterValue));
console.log(notPureCounter(counter, counterValue + 1));
console.log(notPureCounter(counter, counterValue));
console.log(counter);
