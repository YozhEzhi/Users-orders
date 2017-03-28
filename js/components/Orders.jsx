import React from 'react';
import {
  Table, TableBody,
  TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn,
} from 'material-ui/Table';

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adjustForCheckbox: false,
      displayRowCheckbox: false,
      displaySelectAll: false,
      enableSelectAll: false,
      height: '300px',
      multiSelectable: false,
      showRowHover: false,
      selectable: true,
      stripedRows: false,
    };
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          multiSelectable={this.state.multiSelectable}
          selectable={this.state.selectable}
        >
          <TableHeader
            adjustForCheckbox={this.state.adjustForCheckbox}
            displaySelectAll={this.state.displaySelectAll}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="ID of order">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Date of order">Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="Sum of order">Sum</TableHeaderColumn>
              <TableHeaderColumn tooltip="Discount of order">Discount</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.displayRowCheckbox}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.orders.map(order => (
              <TableRow key={`order-${order.id}`} selected={order.selected}>
                <TableRowColumn>{order.id}</TableRowColumn>
                <TableRowColumn>{order.date}</TableRowColumn>
                <TableRowColumn>{order.sum}</TableRowColumn>
                <TableRowColumn>{order.discount}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

Orders.propTypes = {
  orders: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Orders;
