import React, { Component } from 'react';
import {
  Container, Right, Left, Content, List, ListItem, Thumbnail, Text, Body, Icon,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import poses from '../../../constants/poses';
import Colors from '../../../../../native-base-theme/variables/commonColor';

const { brandInfo } = Colors;

class Library extends Component {
  renderFavoritePoses = () => {
    return poses.filter(pose => this.props.favorites[pose.key]).map((pose) => {
      return (
        <ListItem key={pose.key} thumbnail button onPress={() => { Actions.poseDetail({ pose }); }} style={styles.listItem}>
          <Left>
            <Thumbnail square source={pose.image} />
          </Left>
          <Body>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 4 }}>
                {pose.title}
              </Text>
              <IonIcon size={20} name="ios-star" color={brandInfo} />
            </View>
            <Text note>{pose.sanskritName}</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      );
    });
  };

  renderUnfavoritePoses = () => {
    return poses.filter(pose => !this.props.favorites[pose.key]).map((pose) => {
      return (
        <ListItem key={pose.key} thumbnail button onPress={() => { Actions.poseDetail({ pose }); }} style={styles.listItem}>
          <Left>
            <Thumbnail square source={pose.image} />
          </Left>
          <Body>
            <Text>
              {pose.title}
            </Text>
            <Text note>{pose.sanskritName}</Text>
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
            {this.renderFavoritePoses()}
            {this.renderUnfavoritePoses()}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Library;
