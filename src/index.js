import React from "react";
import { render } from "react-dom";

const App = () => (
    <form>
        <input type="text" name="name"/>
        <input type="submit" value="coucou"/>
    </form>
);

render(<App />, document.getElementById("root"));