import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//npm install prop-types --save
// npm install material-ui --save
//Real time example of HOC with Material UI Theme
const styles = (theme) => ({
    container: {
    display: 'flex',
    flexWrap: 'wrap',
},
    textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200

},
    resize: {
    fontSize:20
},
});


function DatePickers(props) {
    const { classes } = props;// This is comping from Theme classes

    return (
    <form className={classes.container} noValidate>
    <TextField
        id="date"
        label="Birthday"
        type="date"
        variant="outlined"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
    }}
    InputProps={{
        classes: {
        input: classes.resize,
        },
    }}
    />
    </form>
    );
}

DatePickers.propTypes = {
classes: PropTypes.object.isRequired,
};
/*
Arrays  - PropTypes.array
Boolean- PropTypes.bool
Functions -  PropTypes.func
Numbers - PropTypes.number
Objects - PropTypes.object
Strings - PropTypes.string
*/

export default withStyles(styles)(DatePickers)

/*

import { createClass, PropTypes } from 'react'
export const Summary = createClass({
    displayName: "Summary",
    propTypes: {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: PropTypes.string
},
render() {
    const {ingredients, steps, title} = this.props
    return (
    <div className="summary">
    <h1>{title}</h1>
    <p>
    <span>{ingredients} Ingredients</span> |
    <span>{steps} Steps</span>
    </p>
    </div>
    )
}
})

*/