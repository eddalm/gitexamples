import React, { Component } from "react";

export default class LikeComponent extends Component {

  render() {
    // console.log(this.props.isLiked, this.props.movie)
    return (
      <div>
        <i
          className={this.setAsLiked()}
          style={{cursor: 'pointer'}}
          onClick={() => this.props.onClick(this.props.movie)}
          stylearia-hidden="true"
        ></i>
      </div>
    );
  }

  setAsLiked = () => {
    const baseHeartStyle = "fa fa-heart";
    return this.props.isLiked ?  baseHeartStyle : baseHeartStyle + "-o";
  };
}
