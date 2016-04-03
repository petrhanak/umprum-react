import React from 'react';
import style from './main.scss';

import Header from './Header';
import Navigation from './Navigation';
import Popup from './Popup';

import Paper from 'material-ui/lib/paper';


export default class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: null
    };
  }

  popup = (item) => {
    this.setState({
      active: item
    });
  };

  render() {
    return (
      <div>
        <Header>
          <Navigation template="side" popup={this.popup}/>
        </Header>
        <div className={style.container}>
          <Paper style={style} zDepth={2} rounded={true} className={style.page}>
            <Navigation template="page" popup={this.popup}/>
          </Paper>
        </div>
        <div className={style.footer}>
          &copy; Petr Hanák 2016
        </div>
        <Popup active={this.state.active}/>
      </div>
    );
  }
}