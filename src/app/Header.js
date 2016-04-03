import React from 'react';
import style from './header.scss';
import content from './data/content';
import classnames from 'classnames';
import main from './main.scss';
import Navigation from './Navigation';
import {muiTheme} from './config';

export default class Header extends React.Component {
  render() {
    let logo = {
      backgroundImage: `url('${content.header.logo}')`
    };
    return (
      <div className={style.wrap}>
        <div className={style.header} style={{background: muiTheme.palette.accent1Color}}>
          <div className={main.container}>
            <div className={style.logo} style={logo}>
            </div>
            <h1 className={style.heading}>
              {content.header.headline}
            </h1>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}