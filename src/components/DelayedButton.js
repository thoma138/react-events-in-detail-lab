import React, { Component } from "react";

export default class DelayedButton extends Component {
  render() {
    return (
      <button
        onClick={(event) =>
          setTimeout(
            () => this.props.onDelayedClick(event.target.persist()),
            this.props.delay
          )
        }
      ></button>
    );
  }
}
