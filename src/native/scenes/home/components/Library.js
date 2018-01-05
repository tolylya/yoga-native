import React, { Component } from 'react';
import { Container, Right, Left, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';
import poses from '../../../constants/poses';


class Library extends Component {
  renderPoses = () => {
    return poses.map((pose) => {
      return (
        <ListItem key={pose.key} thumbnail button onPress={() => { Actions.poseDetail({ pose }); }} style={styles.listItem}>
          <Left>
            <Thumbnail square source={pose.image} />
          </Left>
          <Body>
            <Text>{pose.title}</Text>
            <Text note numberOfLines={2}>{pose.description}</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      );
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.renderPoses()}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Library;
