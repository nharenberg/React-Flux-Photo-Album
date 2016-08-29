import React, { Component } from 'react';
import moment from 'moment'

export default class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    let { _id, task, createdAt, } = this.props;

    return (
      <tr>
        <td><div className="polaroid"> <img src={ task }/></div></td>
        <td>{ moment(createdAt).format('lll') }</td>
      </tr>
    )    
  }
}
