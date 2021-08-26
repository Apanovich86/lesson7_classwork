import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {
  let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c:0});
  return (
      <div>
        <h1>state 1 - {a}</h1>
        <button onClick={() => dispatch({obj: '1', diya: '+'})}>inc (+1)</button>
        <button onClick={() => dispatch({obj: '1', diya: '-'})}>dec (-1)</button>
        <h1>state 2 - {b}</h1>
        <button onClick={() => dispatch({obj: '2', diya: '+'})}>inc (+10)</button>
        <button onClick={() => dispatch({obj: '2', diya: '-'})}>dec (-10)</button>
          <h1>state 3 - {c}</h1>
          <button onClick={() => dispatch({obj: '3', diya: '+'})}>inc (+100)</button>
          <button onClick={() => dispatch({obj: '3', diya: '-'})}>dec (-100)</button>
      </div>
  );
}
