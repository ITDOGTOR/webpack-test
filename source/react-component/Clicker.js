// Core
import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

// Styles
import Styles from './postcss.css';

// Assets
import cat from '../theme/assets/images/cat.jpg';
import reactLogo, {ReactComponent as ReactLogoComponent} from '../theme/assets/images/react.svg';

// Components
import {Button} from './Button';

class Clicker extends Component {
  state = {
    count: 34,
  };

  inc = () => void this.setState(({count}) => ({
    count: count + 1,
  }));

  dec = () => void this.setState(({count}) => ({
    count: count - 1,
  }));

  render() {
    const {count} = this.state;

    return (
      <section className={Styles.clicker} style={{
        '--mainColor': 'rebeccapurple',
        '--headingFontSize': `${this.state.count}px`,
      }}>
        <ReactLogoComponent width={50} />
        <img src={reactLogo} />
        <img src={cat} />
        <h1>Test: {count}</h1>
        <Button onClick={this.inc}>Increment</Button>
        <Button onClick={this.dec}>Decrement</Button>
      </section>
    );
  }
}

export default hot(Clicker);
