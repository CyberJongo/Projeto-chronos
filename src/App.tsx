import { Fragment } from "react/jsx-runtime"
import { Heading } from "./components/Heading"

import './styles/global.css'
import './styles/theme.css'


export function App(){
  console.log("Bye bye m")
  return(
    <Fragment>
      <Heading>Hello World! 0</Heading>
      <Heading>Hello World! 1</Heading>
      <Heading>Hello World! 2</Heading>
      <h1>Eu amo lazanha</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum eos tenetur ullam dolor labore et vero deserunt dolorem voluptatum,
        voluptate ab?
      </p>
    </Fragment>
)
}