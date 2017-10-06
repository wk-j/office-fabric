import * as React from "react";
import * as ReactDOM from "react-dom";
import { DetailsListDocumentsExample } from "./DetailListDocumentsExample";
import { initializeIcons } from '@uifabric/icons';
import "semantic-ui-css/semantic.css";

initializeIcons();

class App extends React.Component<{}, {}> {

    render() {
        return (
            <div className="ui segment">
                <DetailsListDocumentsExample />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));