import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        checked: PropTypes.any,
        item: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render () {
        return (
            <div className='material-checkbox'>
                <span className='checkbox-wrapper'>
                    <input type='checkbox' id={this.props.id} checked={!!this.props.checked}
                        onChange={() => this.props.onChange(this.props.index)} />
                    <label htmlFor={this.props.id}>
                        <span className='checkbox-icon' />
                        {this.props.item.text}
                    </label>
                </span>
            </div>
        );
    }
}

export default Checkbox;
