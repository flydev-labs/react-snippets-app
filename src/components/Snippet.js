import React from 'react';
import FontAwesome from 'react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { RIEInput, RIETextArea } from 'riek';
import _ from 'lodash';

class Snippet extends React.Component {

    render() {
        const { details, index } = this.props;
        return (
            <li className="snippet-item">
                <div className='snippet-title'>
                    <RIEInput
                      value={details.title}
                      change={(data) => this.props.editSnippet(index, 'title', data) }
                      propName='title'
                      validate={_.isString}
                    />
                </div>
                <div className='snippet-code'>
                    <pre>
                        <RIETextArea
                          value={details.code}
                          change={(data) => this.props.editSnippet(index, 'code', data) }
                          propName='code'
                          validate={_.isString}
                        />
                    </pre>
                </div>
                <div className="submit-actions">
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