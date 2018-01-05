import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import poses from './../../../constants/poses';
import Colors from '../../../../../native-base-theme/variables/commonColor';
import { markAsFavorite, removeFromFavorite } from '../../../../actions/poses';

const { brandInfo, brandDanger } = Colors;
const currentPose = poses[0];

const mapStateToProps = state => ({
  selectedPose: state.poses.selectedPose,
  favorites: state.poses.favorites,
});

const mapDispatchToProps = {
  markAsFavorite,
  removeFromFavorite,
};

@connect(mapStateToProps, mapDispatchToProps)
class PoseDetail extends Component {
  renderAdvantages = () => {
    return currentPose.advantages.map((item) => {
      return (
        <CardItem key={item.key} style={{ paddingTop: 2, paddingBottom: 2 }}>
          <Left>
            <Icon size={20} name="md-add" color={brandInfo} />
            <Text style={{ fontSize: 13, color: brandInfo }}>{item.title}</Text>
          </Left>
        </CardItem>
      );
    });
  };

  renderDisadvantages = () => {
    return currentPose.disadvantages.map((item) => {
      return (
        <CardItem key={item.key} style={{ paddingTop: 2, paddingBottom: 2 }}>
          <Left>
            <Icon size={20} name="md-remove" color={brandDanger} />
            <Text style={{ fontSize: 13, color: brandDanger }}>{item.title}</Text>
          </Left>
        </CardItem>
      );
    });
  };

  renderInfluenceOnBody = () => {
    return currentPose.disadvantages.map((item) => {
      return (
        <CardItem key={item.key} style={{ paddingTop: 2, paddingBottom: 2 }}>
          <Left>
            <Icon size={20} name="ios-body" color={brandInfo} />
            <Text style={{ fontSize: 13, color: brandInfo }}>{item.title}</Text>
          </Left>
        </CardItem>
      );
    });
  };

  renderFavoriteButton = () => {
    if (this.props.favorites.includes(currentPose.key)) {
      return (
        <Button transparent onPress={() => { this.props.removeFromFavorite(currentPose.key); }}>
          <Icon size={20} name="ios-star" color={brandInfo} />
        </Button>
      );
    }
    return (
      <Button transparent onPress={() => { this.props.markAsFavorite(currentPose.key); }}>
        <Icon size={20} name="ios-star-outline" />
      </Button>
    );
  };

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ marginLeft: 7, marginRight: 7 }}>
            <CardItem>
              <Left>
                <Thumbnail source={currentPose.image} />
                <Body>
                  <Text uppercase>{currentPose.title}</Text>
                  <Text note style={{ color: brandInfo }}>{currentPose.level}</Text>
                </Body>
              </Left>
              <Right>
                {this.renderFavoriteButton()}
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={currentPose.image} style={{ height: 200, width: '100%', flex: 1 }} />
                <Text style={{ marginTop: 10 }}>{currentPose.description}</Text>
              </Body>
            </CardItem>
            {this.renderAdvantages()}
            {this.renderDisadvantages()}
            {this.renderInfluenceOnBody()}
          </Card>
        </Content>
      </Container>
    );
  }
}

export default PoseDetail;
