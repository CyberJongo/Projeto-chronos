import { Fragment } from "react/jsx-runtime"
import "./styles/global.css"
import ".styles/theme.css"
import { Heading } from "./components/Heading"


export function App(){
  return(
    <Fragment>
      <Heading></Heading>
      <h1>Eu amo lazanha</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum eos tenetur ullam dolor labore et vero deserunt dolorem voluptatum,
        voluptate ab?
      </p>
    </Fragment>
)
}