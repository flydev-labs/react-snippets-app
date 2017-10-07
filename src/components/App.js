import React from 'react';
import base from '../firebase';
import AddSnippetForm from './AddSnippetForm';
import Snippet from './Snippet';

class App extends React.Component {

    constructor() {
        super();
        this.addSnippet = this.addSnippet.bind(this);
        this.removeSnippet = this.removeSnippet.bind(this);
        this.state = {
            snippets: {},
        };
    }

    render() {
        return (
            <div className="container">
                <div id="snippets-list">
                    <ul>
                    {
                        Object
                            .keys(this.state.snippets)
                            .map(key => <Snippet key={key} index={key}
                                details={this.state.snippets[key]}
                                removeSnippet={this.removeSnippet}
                            />)
                    }
                  </ul>
                </div>
                <div id="snippets-form">
                    <AddSnippetForm addSnippet={this.addSnippet} />
                </div>
            </div>
        );
    }

    addSnippet(snippet) {
        // update our state
        const snippets = { ...this.state.snippets };
        // add in our new fish
        const timestamp = Date.now();
        snippets[`snippet-${timestamp}`] = snippet;
        // set state
        this.setState({ snippets });
    }

    removeSnippet(key) {
        const snippets = { ...this.state.snippets };
        snippets[key] = null;
        this.setState({ snippets });
    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        this.ref = base.syncState('theUserName/snippets', {
            context: this,
            state: 'snippets'
        });
    }

}

export default App;