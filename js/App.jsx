import React from 'react';

import SearchBar from './components/SearchBar';
import Orders from './components/Orders';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      orders: null,
    };

    this.handleAutocomplete = this.handleAutocomplete.bind(this);

    this.getData();
  }

  getData() {
    Promise.all([
      this.getJson('orders'),
      this.getJson('users'),
    ])
      .then(data => this.setState({
        orders: data[0],
        users: data[1],
      }))
      .catch(error => console.error(error));
  }

  getJson(data) {
    return fetch(`./${data}.json`)
      .then(response => response.json());
  }

  handleAutocomplete(term) {
    console.log(term);
    const data = [...this.state.searchData];
    const users = data.filter(item => item.name.toLowerCase().includes(term));

    this.setState({ users });
  }

  render() {
    if (!this.state.users) {
      return (
        <div className="container">
          <h3>Loading...</h3>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h4>Search</h4>
            <SearchBar users={this.state.users} onFilter={this.handleAutocomplete} />
          </div>

          <div className="col-sm-7">
            <h4>Orders</h4>
            <Orders orders={this.state.orders} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
