import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Snippet extends React.Component {

    render() {
        const { details, index } = this.props;
        return (
            <li className="snippet-item">
                <h3>{ details.title }</h3>
                <pre>{ details.code }</pre>
                <button className="snippet-delete" onClick={() => this.submit(index)}>&times;</button>
            </li>
        );
    }

    submit(index) {
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