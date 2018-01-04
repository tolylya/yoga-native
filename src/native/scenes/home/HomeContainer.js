import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class Home extends Component {
  state = {};

  render() {
    return (
      <Container style={styles.container}>
        <Header><Text style={styles.headerText}>Header s2222xs2</Text></Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-body" />
              <Text style={styles.signature}>Тренировка</Text>
            </Button>
            <Button vertical onPress={() => Actions.cameraPage()}>
              <Icon name="book" />
              <Text style={styles.signature}>Библиотека</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text style={styles.signature}>Комплекс</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-information-outline" />
              <Text style={styles.signature}>Инфо</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
