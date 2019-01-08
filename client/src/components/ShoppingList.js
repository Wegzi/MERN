import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

  onDeleteClick = (id) => {
    this.props.deleteItems(id);
  }
  componentDidMount() {
    this.props.getItems();
  }


  render(){
    const { items } = this.props.item;
    return(
      <div className="container">

        <ul className="list-group mt-3">
          {items.map(({ id, name }) => (
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-primary mr-1"
                  onClick={ this.onDeleteClick.bind(this, id) }>&times;</button>
                {name}
              </li>
          ))}
          </ul>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
})
export default connect(
  mapStateToProps,
  { getItems,deleteItem }
)(ShoppingList);
