import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  constructor(props) {
    // initialize the state of the app
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      showBlue: true,
      showGreen: false,
      change: '',
      currency: [
        ['twenties-output', 20, 0],
        ['tens-output', 10, 0],
        ['fives-output', 5, 0],
        ['dollars-output', 1, 0],
        ['quarters-output', 0.25, 0],
        ['dimes-output', 0.10, 0],
        ['nickels-output', 0.05, 0],
        ['pennies-output', 0.01, 0]
      ]
    };

    // Bind this keyword
    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  // Function to update state values when an input changes, using event binding
  handleInputChange(event) {
    this.setState({
      [event.target.name]: parseFloat(event.target.value)
    });
  }

  // Function to calculate the correct change
  calculate() {
    let change = this.state.amountReceived - this.state.amountDue;

    this.setState({
      change: this.state.amountReceived - this.state.amountDue
    });

    if (change < 0) {
      this.setState({
        showBlue: false,
        showGreen: false
      });
    }
    if (change >= 0) {
      this.setState({
        showGreen: true,
        showBlue: false,
      });
    }

    const currency = [
      // United States currency denominations
      // string, number, count
      ['twenties-output', 20, 0],
      ['tens-output', 10, 0],
      ['fives-output', 5, 0],
      ['dollars-output', 1, 0],
      ['quarters-output', 0.25, 0],
      ['dimes-output', 0.10, 0],
      ['nickels-output', 0.05, 0],
      ['pennies-output', 0.01, 0]
    ];

    // Determine the counts for the currency denominations
    for (let i = 0; i < currency.length; i += 1) {
      currency[i][2] = Math.floor(change / currency[i][1]);
      change = (change % currency[i][1]).toFixed(2);
      console.log('change: ', change);
    }
    console.log('U.S. Currency Denominations & Coins:', currency);

    if (this.state.amountReceived > this.state.amountDue) {
      this.setState({
        currency
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          < Header />
          <div className='row'>
            <div className='col-4'>
              <div className='card mt-1' id='calculator-inputs-card'>
                <div className='card-header'>Enter Information</div>
                <div className='card-body'>
                  <label className='form-label' htmlFor='amount-due'>How much is due?</label>
                  <input className='form-control' type='number' name='amountDue' placeholder='US Dollars ($)' value={ this.state.amountDue } onChange={ this.handleInputChange } />
                  <label className='form-label' htmlFor='amount-received'>How much was received?</label>
                  <input className='form-control' type='number' name='amountReceived' placeholder='US Dollars ($)' value={ this.state.amountReceived } onChange={ this.handleInputChange } />
                  <br />
                  <div className='col-sm-12 mx-auto'>
                    <button className='btn btn-primary w-100' type='button' name='button' onClick={ () => this.calculate() }>Calculate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-8'>
              <div className='card'>
                <div className='card-body' id='output-card'>
                  <div className='card-columns'>
                    <div className='card-body text-center' id='outcome-alerts'>
                      {this.state.showBlue === true ?
                        <div className='alert alert-primary' role='alert'>Enter the amount due and the amount received.</div>
                        : this.state.showGreen === true ?
                          <div className='alert alert-success' role={ alert }>The total change due is ${ (+this.state.change).toFixed(2) }</div>
                        : <div className='alert alert-danger' role={ alert }>Additional money is owed: ${ Math.abs(+this.state.change).toFixed(2)}</div>
                      }
                    </div>
                    <div className='card-body' id='denominations-cards'>
                      <div className='container text-center'>
                        <div className='row align-items-center'>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Twenties</h5>
                                <p className='change' id='twenties-output'>{this.state.currency[0][2]}</p>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Tens</h5>
                                <p className='change' id='tens-output'>{this.state.currency[1][2]}</p>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Fives</h5>
                                <p className='change' id='fives-output'>{this.state.currency[2][2]}</p>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Ones</h5>
                                <p className='change' id='dollars-output'>{this.state.currency[3][2]}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='row align-items-center'>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Quarters</h5>
                                <p className='change' id='quarters-output'>{this.state.currency[4][2]}</p>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Dimes</h5>
                                <p className='change' id='dimes-output'>{this.state.currency[5][2]}</p>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Nickels</h5>
                                <p className='change' id='nickels-output'>{this.state.currency[6][2]}</p>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='card text-bg-light mb-3'>
                              <div className='card-body'>
                                <h5 className='card-title'>Pennies</h5>
                                <p className='change' id='pennies-output'>{this.state.currency[7][2]}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
