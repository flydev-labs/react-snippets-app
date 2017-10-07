import React from 'react';

class Snippet extends React.Component {

    render() {
        const { details } = this.props;
        return (
            <li className="menu-fish">
                <p>{ details.snippet }</p>
            </li>
        )
    }
}

// Fish.propTypes = {
// details: React.PropTypes.object.isRequired,
// index: React.PropTypes.string.isRequired,
// addToOrder: React.PropTypes.func.isRequired
// };

export default Snippet;