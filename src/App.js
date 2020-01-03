import React, {useContext, useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Switch, Link, Route, useParams} from "react-router-dom";

function Routing() {

    return (
        <Router>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/test'} component={Abc} exact/>
                <Route path={'/welcome/:name'} component={Welcome} exact/>
                <Route path={'/tc'} component={ContxtHook} exact/>
                <Route path='*' exact={true} component={My404Component} />
            </Switch>
        </Router>
    );
}
function Welcome() {
    const params = useParams();
    return <h1>welcome {params.name}</h1>;
}
function My404Component() {
    return (
        <>
            <h1>404</h1>
            <Link to={'/'}>Go Back</Link>
        </>
    );
}
function Abc() {
    const H1Ref = useRef();
    const [counter, setCounter] = useState(0);

   /* setTimeout(() => {
        console.log(H1Ref);
        console.log(H1Ref.current);
        console.log(H1Ref.current.innerHTML);
        console.log(H1Ref.current.innerText);
    },10);*/

   useEffect(() => {
       console.log(H1Ref)
   },[counter]);

    return (
        <div ref={H1Ref} onClick={() => setCounter(counter => counter + 1)}>
            <h1>djfjdg {6*6} </h1>
            <h1>{counter} </h1>
        </div>
    );
}

let MyContext = React.createContext();

function ContxtHook() {
    return (
        <MyContext.Provider value={{name: "salman"}}>
            <div>
                <span>
                    <Abcd/>
                </span>
            </div>
        </MyContext.Provider>
    )
}

function Abcd() {
    const state = useContext(MyContext);

    return <h1> Your name is {state.name} </h1>;
}
function Button() {
    let [counter, setCounter] = useState(0);

    function clickMe()
    {
        setCounter(counter + 1)
    }

  return (
      <div>
        <button onClick={clickMe}>Click me</button>
        <p>{counter}</p>
      </div>
  )
}

function Form() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div>
          <input type="text" value={name} onChange={onNameChange}/>
          <p> {name}</p>
          <input type="password" value={password} onChange={onPasswordChange}/>
          <p> { password } </p>
      </div>
    );

    function onNameChange(e) {
        setName(e.target.value)
    }

    function onPasswordChange(e) {
        setPassword(e.target.value)
    }
}

function PassData(props) {
    return (
        <h1> hello {props.name}</h1>
    )
}

function ChildComp(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

function Home() {
    return (
        <ChildComp>
            <Abc/>
            <Button/>
            <Form/>
            <PassData name="Salman"/>
        </ChildComp>
    );
}

function App() {
  return (
      <Routing/>
  );
}

export default App;
