import React from 'react';
import './ValidationComponent.css';

class ValidationComponent extends React.Component {
    render() {
        let validation = null;
        if (this.props.longitud1<5) {
          validation = (
              <> Texto demasiado corto</>
          )
        }else{
          validation = (
              <> Texto suficientemente largo</>
          )
        }

        return (
            <div className="ValidationComponent">
                <h4>
                  {validation}
                </h4>

                <p></p>
            </div>
        )
    }
}

export default ValidationComponent;
