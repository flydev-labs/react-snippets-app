import React from 'react';

class AddSnippetForm extends React.Component {

    createSnippet(event) {
        event.preventDefault();
        const snippet = {
            title: this.title.value,
            code: this.code.value,
        };
        this.props.addSnippet(snippet);
        this.snippetForm.reset();
    }

    render() {
        return (
            <form ref={(input) => this.snippetForm = input} id="snippet-form" onSubmit={(e) => this.createSnippet(e)}>
                <input ref={(input) => this.title = input} type="text" placeholder="Snippet title ..." required="required" />
                <textarea ref={(input) => this.code = input} placeholder="Snippet code ..." required="required"></textarea>
                <button type="submit">+ Save Snippet</button>
            </form>
        );
    }

}

export default AddSnippetForm;