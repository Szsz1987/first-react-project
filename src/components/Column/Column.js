import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }
<<<<<<< HEAD
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>

          <h3 className={styles.title}>{title}
            <span className={styles.icon}> 
              <Icon name={icon} />
            </span>
          </h3>

          <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          </div>
=======

    addCard(title) {
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards [state.cards.length-1].key+1 : 0,
              title,
            },
          ],
        }
      ));
    }

    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}
            <span className={styles.icon}>
              <Icon name={this.props.icon} />
            </span>
          </h3>
          <div className={styles.cards}>
            {this.state.cards.map (({key, ...cardProps}) => (
              <Card key={key} {...cardProps} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>   
        </section>
      );
    }
}
>>>>>>> 2db693c3e3d2284cf6188f988fc806c89f51d49a

          {/*
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
            */}

        </section>
      );
    }
  }
  export default Column;