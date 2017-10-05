import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

export default class App extends React.Component {
    state = {
      billAmount: 0,
      tip: 0,
      totalValue: 0
    }

    textChange = (value) => {
        // value is a string so we convert value to a float (number with decimals)
        value = parseFloat(value || 0);

        // Store this new value in our application's state
        this.setState({
            billAmount: value
        });
    }

    calculateTip = (proportion) => {
        const billAmount = this.state.billAmount;
        const tip = proportion * billAmount;

        // Now that we've calculated the tip and total value, we store it in our
        // app state
        this.setState({
            tip: tip,
            totalValue: billAmount + tip
        })

        // Used to hide the phone keyboard
        Keyboard.dismiss();
    }

    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Tip Calculator</Text>

            <TextInput
              autoFocus={true}
              keyboardType='numeric'
              onChangeText={this.textChange}
              placeholder='Bill Amount'
              style={styles.billInput}
            />

            <Button
              title="10%"
              onPress={() => {
                this.calculateTip(0.1);
              }}
              style={styles.tipButtonContainer}
            />

            <Button
              title="15%"
              onPress={() => {
                this.calculateTip(0.15);
              }}
              style={styles.tipButtonContainer}
            />

            <Button
              title="20%"
              onPress={() => {
                this.calculateTip(0.2);
              }}
              style={styles.tipButtonContainer}
            />

            <Button
              title="25%"
              onPress={() => {
                this.calculateTip(0.25);
              }}
              style={styles.tipButtonContainer}
            />

            <Text style={styles.tipLabel}>Tip: {this.state.tip}</Text>
            <Text style={styles.totalLabel}>Total: {this.state.totalValue}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60
  },
  title: {
    fontSize: 40,
    color: 'pink',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  billInput: {
    width: '80%',
    height: 80,
    fontSize: 28,
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  tipButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',45
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  tipLabel: {
    fontSize: 28,
    marginTop: 20,
    color: 'pink'
  },
  totalLabel: {
    fontSize: 28,
    fontWeight: '700',
    color: 'pink',
    marginTop: 20
  }
});
