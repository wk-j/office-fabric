import * as React from "react";
import * as ReactDOM from "react-dom";
import { DetailsListDocumentsExample } from "./DetailListDocumentsExample";
import { initializeIcons } from '@uifabric/icons';
import "semantic-ui-css/semantic.css";
import { Simple } from "./Simple";

initializeIcons();

class App extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <div className="ui segment">
                    <Simple />
                </div>
                <div className="ui segment">
                    <DetailsListDocumentsExample />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app1"));