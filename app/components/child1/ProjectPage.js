var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';

// import child 2
import Card1 from "../child2/Card1";
import Card2 from "../child2/Card2";

export default class Project1 extends React.Component {


    render(){
        return(
            <div id="accordion" role="tablist">
                <br />
                <Card1 />
                <Card2 />
                <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0">
                        <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Collapsible Group Item #3
                        </a>
                    </h5>
                    </div>
                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
                </div>
                
        )
    }
}


