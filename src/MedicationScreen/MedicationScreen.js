import React from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from 'native-base';
import actions from '../actions'
import { connect } from 'react-redux';

const renderIcon = (format) => {
  switch (format) {
    case 'pill':
      return 'md-medkit';
    case 'inhaler':
      return 'md-airplane';
    default:
      return 'md-medical';
  }
};

const renderSchedule = ({ amount, frequency, dose }) => <Text>{`${amount} x ${dose} @ ${frequency}`}</Text>;

class Medication extends React.Component {
  
  componentWillMount() {
    this.props.fetchMedications();
  }

  render() {
    return (
      <Container>
        <Content padder>
          {
            this.props.medication ? 
              this.props.medication.medications.map( med =>
                <Card key={med.id}>
                  <CardItem>
                    <Icon active name={renderIcon(med.format)} />
                    <Text>{med.name}</Text>
                    <Right>
                      {renderSchedule({...med.schedule, dose: med.dose})}
                    </Right>
                  </CardItem>
                </Card>
              )
              : null
          }
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('AddMedication')}>
            <Text>Add Medication</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

Medication.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Medication</Title>
      </Body>
      <Right />
    </Header>
  ),
});

const mapStateToProps = (state) => {
  console.log("Mapping state to props, state is", state);
  const { medication } = state;
  return { medication };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMedications: () => dispatch(actions.fetchMedications()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Medication);
