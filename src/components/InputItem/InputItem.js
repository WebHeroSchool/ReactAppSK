import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: "",
    inputBackground: "",
    inputLabel: "Enter a new task"
  };

  onButtonClick = () => {
    this.setState ({
      inputValue: ''
    });

    if (!this.props.items.some(item => item.value.toLowerCase() === this.state.inputValue.toLowerCase())) {
      this.props.onClickAdd(this.state.inputValue)
    } else {
      this.setState({inputBackground: 'red', inputLabel: 'Error! The entered value is incorrect'});
    }
    
  }

  render (){

    return (
      <div>
        <TextField 
          id="filled-full-width"
          label={this.state.inputLabel}
          style={{ margin: 8,
          backgroundColor: this.state.inputBackground }}
          fullWidth
          value = {this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value})}
          onFocus={() => this.setState({inputBackground: "", inputLabel: "Enter a new task"})}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Button 
          variant="contained" 
          color="primary"
          fullWidth
          onClick = {this.onButtonClick}
          disabled={!this.state.inputValue}
          >
          Add a new task
        </Button>
      </div>
    );
  }
}


export default InputItem;