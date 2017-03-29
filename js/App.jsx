import React from 'react';

import Orders from './components/Orders';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      orders: null,
      selectedOrder: null,
    };

    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.getData();
  }

  getData() {
    Promise.all([
      this.getJson('orders'),
      this.getJson('users'),
    ])
      .then(data => this.setState({
        initialOrders: data[0],
        orders: data[0],
        users: data[1],
      }))
      .catch(error => console.error(error));
  }

  getJson(data) {
    return fetch(`./${data}.json`).then(response => response.json());
  }

  handleAutocomplete(user) {
    const data = [...this.state.initialOrders];
    const orders = data.filter(item => item.cardNumber === user.cardNumber);

    this.setState({
      orders,
      selectedOrder: user.name,
    });
  }

  handleInput(term) {
    if (term) return;
    this.setState({
      orders: this.state.initialOrders,
      selectedOrder: null,
    });
  }

  render() {
    if (!this.state.users) {
      return (
        <div className="container">
          <h3>Loading...</h3>
        </div>
      );
    }

    const orderFor = this.state.selectedOrder ? this.state.selectedOrder : 'All';

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h4>Search</h4>
            <SearchBar
              onFilter={this.handleAutocomplete}
              onInput={this.handleInput}
              users={this.state.users}
            />
          </div>

          <div className="col-md-7">
            <h4>{orderFor} orders</h4>
            <Orders orders={this.state.orders} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
