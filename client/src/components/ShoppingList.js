import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

import ItemModal from './ItemModal'


class ShoppingList extends Component {

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }
  componentDidMount() {
    this.props.getItem();
  }


  render(){
    const { items } = this.props.item;
    return(
      <div className="container mt-3">
        <ItemModal />
        <ul className="list-group mt-3">
          {items.map(({ _id, name }) => (
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={ this.onDeleteClick.bind(this, _id) }>&times;</button>
                {name}
              </li>
          ))}
          </ul>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
})
export default connect(
  mapStateToProps,
  { getItem, deleteItem }
)(ShoppingList);
