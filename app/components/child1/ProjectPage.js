var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import child 2
import Card1 from "../child2/Card1";
import Card2 from "../child2/Card2";
import Card3 from "../child2/Card3";

export default class Project1 extends React.Component {


    render(){
        return(
            <div id="accordion" role="tablist">
                <br />
                <Card1 />
                <Card2 />
                {/* <Card3 /> */}
                </div>
                
        )
    }
}


