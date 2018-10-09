import React from 'react';
import { AppRegistry, Alert } from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from 'native-base';

export default class AddMedication extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Adding Medication</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Form to add medication hereMedication</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

