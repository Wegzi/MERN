import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    name: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    }
    this.props.addItem(newItem);
  }

  render() {
    return(
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Adicionar
        </button>
        <form onSubmit={this.onSubmit}>
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Item</label>
                      <input
                        type="text"
                        name="name"
                        id="item"
                        className="form-control"
                        onChange={this.onChange}
                      ></input>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);
