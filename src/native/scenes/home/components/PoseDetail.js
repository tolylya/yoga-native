import React, { Component } from 'react';
import {
  Container, Content, Card, CardItem, Thumbnail, Text, Left, Body, Right, Button, Separator,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../../../../native-base-theme/variables/commonColor';
import { markAsFavorite, removeFromFavorite } from '../../../../actions/poses';

const { brandInfo, brandDanger, brandSuccess } = Colors;

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
  renderFavoriteButton = () => {
    const { pose } = this.props;
    if (this.props.favorites[pose.key]) {
      return (
        <Button transparent onPress={() => { this.props.removeFromFavorite(pose.key); }}>
          <Icon size={30} name="ios-star" color={brandInfo} />
        </Button>
      );
    }
    return (
      <Button transparent onPress={() => { this.props.markAsFavorite(pose.key); }}>
        <Icon size={30} name="ios-star-outline" />
      </Button>
    );
  };

  render() {
    const { pose } = this.props;

    return (
      <Container>
        <Content>
          <Card style={{ marginLeft: 7, marginRight: 7 }}>
            <CardItem>
              <Left>
                <Thumbnail source={pose.image} />
                <Body>
                  <Text uppercase>{pose.title}</Text>
                  <Text note style={{ color: brandInfo }}>{pose.level}</Text>
                </Body>
              </Left>
              <Right>
                {this.renderFavoriteButton()}
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={pose.image} style={{ height: 200, width: '100%', flex: 1 }} />
                <View style={{ width: '100%', marginTop: 6 }}>
                  <Text note style={{ textAlign: 'center' }}>
                    {pose.sanskritName}
                  </Text>
                </View>
                <Text style={{ marginTop: 10 }}>{pose.description}</Text>
              </Body>
            </CardItem>
            <Separator>
              <Text style={{ fontSize: 15, color: brandInfo }}>Модификации для начинающих</Text>
            </Separator>
            <ListItem>
              <Text>{pose.modifications}</Text>
            </ListItem>
            <Separator>
              <Text style={{ fontSize: 15, color: brandSuccess }}>Польза</Text>
            </Separator>
            <ListItem>
              <Text>{pose.benefit}</Text>
            </ListItem>
            <Separator>
              <Text style={{ fontSize: 15, color: brandDanger }}>Противопоказания</Text>
            </Separator>
            <ListItem>
              <Text>{pose.contraindications}</Text>
            </ListItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default PoseDetail;
