import React, { Component } from 'react';
import { Container, Right, Left, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import img from './../../../../images/yoga-p.jpg';
import styles from '../styles';

class Library extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail button onPress={() => { Actions.poseDetail(); }} style={styles.listItem}>
              <Left>
                <Thumbnail square source={img} />
              </Left>
              <Body>
                <Text>Поза лотоса</Text>
                <Text note>Очень устойчивая медитативная поза, которая оптимально...</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Library;
