import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rating > this.props.rating){
      this.state.increasing = true
      this.state.decreasing = false
    }
    else if (nextProps.rating < this.props.rating) {
      this.state.decreasing = true
      this.state.increasing = false
    }
    else if (nextProps === this.props.rating) {
      this.state.increasing = false
      this.state.decreasing = false
    }
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
