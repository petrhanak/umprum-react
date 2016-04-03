import React from 'react';
import style from './popup.scss';

import {Dialog, IconButton, FloatingActionButton} from 'material-ui/lib';
import Close from 'material-ui/lib/svg-icons/navigation/close';
import NavigateBefore from 'material-ui/lib/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/lib/svg-icons/image/navigate-next';
import content from './data/content';
import _ from 'lodash';

export default class Popup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.items = [];
    content.navigation.forEach(section => {
      this.items = [...this.items, ...section.items];
    });

    this.state = {
      show: false,
      active: 0
    };
  }

  prev = () => {
    this.setState({
      show: true,
      active: this.state.active - 1
    });
  };


  next = () => {
    this.setState({
      show: true,
      active: this.state.active + 1
    });
  };

  close = () => {
    this.setState({
      show: false,
      active: this.state.active || 0
    });
  };

  componentWillReceiveProps = (props) => {
    if (props.active === null) {
      this.close();
    } else {
      this.setState({
        show: true,
        active: _.findIndex(this.items, props.active)
      });
    }
  };

  render() {
    return (
      <Dialog open={this.state.show}>
        <h3 className={style.title}>
          {this.items[this.state.active].name}
        </h3>
        <IconButton className={style.close} onClick={this.close}>
          <Close/>
        </IconButton>
        <p className={style.description}>
          {this.items[this.state.active].description}
        </p>
        <img src={this.items[this.state.active].image} className={style.image}/>

        <FloatingActionButton disabled={!this.items[this.state.active-1]} className={style.navigateBefore} mini={true} onClick={this.prev}>
          <NavigateBefore/>
        </FloatingActionButton>
        <FloatingActionButton disabled={!this.items[this.state.active+1]} className={style.navigateNext} mini={true} onClick={this.next}>
          <NavigateNext/>
        </FloatingActionButton>
      </Dialog>
    );
  }
}