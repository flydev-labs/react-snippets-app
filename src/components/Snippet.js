import React from 'react';

class Snippet extends React.Component {

    render() {
        const { details, index } = this.props;
        return (
            <li className="snippet-item">
                <p>{ details.snippet }</p>
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