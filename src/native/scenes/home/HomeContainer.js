import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import Complexes from './components/Complexes';
import Info from './components/Info';
import Library from './components/Library';
import Training from './components/Training';

import styles from './styles';

const footerButtons = [{
  title: 'Тренировка',
  key: 'training',
  icon: 'ios-body',
}, {
  title: 'Библиотека',
  key: 'library',
  icon: 'book',
}, {
  title: 'Комплекс',
  key: 'complex',
  icon: 'navigate',
}, {
  title: 'Инфо',
  key: 'info',
  icon: 'md-information',
}];

const mapStateToProps = state => ({
  favorites: state.poses.favorites,
});

@connect(mapStateToProps)
class Home extends Component {
  state = {
    currentTab: 'complex',
    tabName: 'Комплекс',
  };

  getContent = () => {
    switch (this.state.currentTab) {
      case 'training':
        return <Training />;

      case 'library':
        return <Library favorites={this.props.favorites} />;

      case 'complex':
        return <Complexes />;

      case 'info':
        return <Info />;

      default:
        return <Complexes />;
    }
  };

  getFooter = () => {
    return footerButtons.map(button => (
      <Button
        vertical
        active={this.state.currentTab === button.key}
        title={button.title}
        key={button.key}
        onPress={() => this.openTab({ currentTab: button.key, tabName: button.title })}
      >
        <Icon name={button.icon} active={this.state.currentTab === button.key} />
        <Text style={styles.signature}>{button.title}</Text>
      </Button>
    ));
  };

  openTab = (tab) => {
    this.setState(tab);
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Text style={styles.headerText}>{this.state.tabName}</Text>
        </Header>
        <Content>
          {this.getContent()}
        </Content>
        <Footer>
          <FooterTab>
            {this.getFooter()}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
