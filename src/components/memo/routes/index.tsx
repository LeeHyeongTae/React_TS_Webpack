import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Memo from '../pages/memo';
import Trash from '../pages/trash';
import Chat from "../../ChatBot/ChatBot";

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/memo" component={Memo} />
            <Route path="/trash" component={Trash} />
            <Route path="/chatbot" component={Chat}/>
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;