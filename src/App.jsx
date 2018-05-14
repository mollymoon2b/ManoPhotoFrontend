import React from 'react';
import UploadPhoto from './components/UploadPhoto';
import Vote from './components/Vote';
import Home from './components/Home';
import { BrowserRouter, Route} from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/uploadPhoto" component={UploadPhoto}/>
            <Route path="/vote" component={Vote}/>
        </div>
    </BrowserRouter>
);

export default App;
