import React from 'react';
import './CharComponent.css';

class CharComponent extends React.Component {
    render() {

        return (
            <div className="CharComponent" onClick={this.props.borrar}>
              {this.props.letra}
            </div>
        )
    }
}

export default CharComponent;
