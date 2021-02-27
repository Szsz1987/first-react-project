import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

<<<<<<< HEAD
class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3>{title}</h3>
      </section>
    );
  }
}
=======
const Card = props => (		
  <div className={styles.component}> 
    <h3> {props.title} </h3>
  </div>
); 

Card.propTypes = {
  title: PropTypes.string,
};
>>>>>>> 2db693c3e3d2284cf6188f988fc806c89f51d49a

export default Card; 