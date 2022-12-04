import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter  from "./components/Counter"
import List from "./components/List"

import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(1)
  return (
    <>
   <Heading title={"Hello Keller"} />
   <Section title={"Different Title"}>This is my section, there are many like it but this is mine</Section>
   <Counter setCount={setCount}>Count is {count}</Counter>
   <List items={["Coffee", "Tacos", "Code"]}
         render={(item:string) => <span className="bold">{item}</span>}
   />
   </>
  )
}

export default App
