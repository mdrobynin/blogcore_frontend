import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';
import './Counter.css';

const CounterComponent = ({count, onIncrease, onDecrease}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={onIncrease}>+</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={onDecrease}>-</button>
                </div>
                <div className="col-md-1">
                    {count}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    count: state.count
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrease: () => dispatch(increaseCounter()),
    onDecrease: () => dispatch(decreaseCounter())
})

export const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent)
