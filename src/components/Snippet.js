import React from 'react';

class Snippet extends React.Component {

    render() {
        const { details, index } = this.props;
        return (
            <li className="snippet-item">
                <h3>{ details.title }</h3>
                <p>{ details.code }</p>
                <button className="snippet-delete" onClick={() => this.props.removeSnippet(index)}>&times;</button>
            </li>
        );
    }
}

// Fish.propTypes = {
// details: React.PropTypes.object.isRequired,
// index: React.PropTypes.string.isRequired,
// addToOrder: React.PropTypes.func.isRequired
// };

export default Snippet;