import React from 'react';
import style from './navigation.scss';

import content from './data/content';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className={style[this.props.template]}>
        {content.navigation.map((section, i) => (
          <div key={`w${i}`}>
            <h2 key={`t${i}`} className={style.title}>
              {section.title}
            </h2>
            {section.items.map((item, i) => (
              <div key={`i${i}`} className={style.item} onClick={()=>this.props.popup(item)}>
                <div style={{backgroundImage: `url(${item.image})`}} className={style.image}></div>
                <span className={style.name}>{item.name}</span>
              </div>
            ))}
          </div>
        ))}

      </div>
    );
  }
}
