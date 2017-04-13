import React from 'react';
import Websocket from 'react-websocket';

class ItemRow extends React.Component{
  render(){
    return <tr>
              <td>
                this.props.msg
              </td>
           </tr>
  }
}

/*class ItemTable extends React.Component{
  render() {
    let rows = [];

  }
}*/
class LiveFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {msg : "test"};
  }

    handleData(data) {
        //let result = JSON.parse(data);
        console.log(data);
        let result = data;
        this.setState({msg: this.state.msg + "\n" + data});
    }

    render() {
        return (
            <div>
              Live search: <strong>{this.state.msg}</strong>
              <Websocket url='ws://poe-livesearch-api.herokuapp.com/ws/livesearch?league=Legacy&type=Ancient%20Reliquary%20Key'
                         onMessage={this.handleData.bind(this)}/>
            </div>
        );
    }

}

export default LiveFeed;