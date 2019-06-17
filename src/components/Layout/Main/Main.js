import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Main.scss';

import Loading from '../../UI/Loading/Loading';
import Books from './Books/Books';

import * as actions from '../../../store/actions/index';

class Main extends Component {
  componentDidMount = () => {
    this.props.getBooks();
  }

  render() {
    const { loading } = this.props;

    return (
      <main>
        <div className="wrapper">
          {loading ? (
            <Loading />
          ) : (
            <Books />
          )}
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(actions.getBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
