import React from 'react';
import { AppRegistry, Alert } from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text, Item, Input, Picker, Form } from 'native-base';
import actions from '../actions'
import { connect } from 'react-redux';


class AddMedication extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      format: null,
      type: null,
      dose: null,
      amount: null,
      frequency: null,
    };
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Form to add medication</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Form>
            <Item>
              <Input
                placeholder="Name"
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.type}
                onValueChange={(type) => this.setState({type})}
              >
                <Picker.Item label="Vitamin" value="vitamin" />
                <Picker.Item label="Painkiller" value="painkiller" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Format"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.format}
                onValueChange={(format) => this.setState({format})}
              >
                <Picker.Item label="Pill" value="pill" />
                <Picker.Item label="Inhaler" value="inhaler" />
              </Picker>
            </Item>
            <Item>
              <Input
                placeholder="Dose"
                onChangeText={(dose) => this.setState({dose})}
                value={this.state.dose}
              />
            </Item>
            <Item>
              <Input
                placeholder="Amount"
                onChangeText={(amount) => this.setState({amount})}
                value={this.state.amount}
              />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Frequency"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.frequency}
                onValueChange={(frequency) => this.setState({frequency})}
              >
                <Picker.Item label="Monthly" value="monthly" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Daily" value="daily" />
                <Picker.Item label="Twice Daily" value="twice" />
                <Picker.Item label="Every Meal" value="meal" />
                <Picker.Item label="As Needed" value="need" />
              </Picker>
            </Item>
            <Button block
              onPress={ () => {
                this.props.onAddClick({
                  id: Math.random(), // XXX temporary
                  name: this.state.name,
                  format: this.state.format,
                  type: this.state.type,
                  dose: this.state.dose,
                  schedule: {
                    amount: this.state.amount,
                    frequency: this.state.frequency,
                  }
                });
                this.props.navigation.goBack();
              }}
            >
              <Text>Add Medication</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { medication } = state;
  return { medication };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: medication => dispatch(actions.addMedication(medication)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMedication);
