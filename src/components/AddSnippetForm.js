import React from 'react';

class AddSnippetForm extends React.Component {

    createSnippet(event) {
        event.preventDefault();
        console.log('Create snippet please ...');
        const snippet = {
            snippet: this.snippet.value,
        }
        this.props.addSnippet(snippet);
        this.snippetForm.reset();
    }

    render() {
        return (
            <form ref={(input) => this.snippetForm = input} className="fish-edit" onSubmit={(e) => this.createSnippet(e)}>
                <textarea style={{ height:400+"px" }} ref={(input) => this.snippet = input} placeholder="Snippet code ..."></textarea>
                <button type="submit">+ Save Snippet</button>
            </form>
        )
    }

}

export default AddSnippetForm;