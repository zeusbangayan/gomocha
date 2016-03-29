import React from 'react'
import sass from './options.scss'

var MilkType = React.createClass({

    render: function() {

        return (
            <select name="milk-type" value={this.props.value} onChange={this.props.handleChange}>
                <option value="default" disabled>Milk Type</option>
                <option value="almond-milk">Almond Milk</option>
                <option value="soy-milk">Soy Milk</option>
                <option value="rice-milk">Rice Milk</option>
                <option value="whole-milk">Whole Milk</option>
                <option value="non-fat-milk">Non-Fat Milk</option>
            </select>
        )
    }
});

module.exports = MilkType;
