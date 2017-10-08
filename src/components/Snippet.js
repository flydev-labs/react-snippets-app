import React from 'react';
import FontAwesome from 'react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Snippet extends React.Component {

    render() {
        const { details, index } = this.props;
        return (
            <li className="snippet-item">
                <h3>{ details.title }</h3>
                <pre>{ details.code }</pre>
                <div className="submit-actions">
                    <button className="snippet-modify" onClick={() => this.submit(index)}>
                        <FontAwesome name='pencil-square-o' />
                    </button>
                    <button className="snippet-delete" onClick={() => this.delete(index)}>
                        <FontAwesome name='trash-o' />
                    </button>
                </div>
            </li>
        );
    }

    delete(index) {
        confirmAlert({
            title: 'Confirm snippet deletion',
            message: 'Are you sure that you want to permanently delete the selected snippet?',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => this.props.removeSnippet(index),
        });
    }

}

// Fish.propTypes = {
// details: React.PropTypes.object.isRequired,
// index: React.PropTypes.string.isRequired,
// addToOrder: React.PropTypes.func.isRequired
// };

export default Snippet;