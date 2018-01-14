import React, {Component} from "react";

import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class SpecificBoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: this.props.currentBoard,
    }
  }
 componentWillReceiveProps(nextProps) {
if (this.props.match.params.id !== nextProps.match.params.id ){  
this.setState({currentBoard: this.props.getOneBoard(nextProps.match.params.id)})
}
   
  }
 
componentDidMount() {
   const {getOneBoard, match, currentBoard, isFetching} = this.props;
   console.log(match.params.id)
getOneBoard(match.params.id)



   
  }
  render() {
    const {getOneBoard, currentBoard, isFetching, match} = this.props;

   
   console.log(this.props)

    return (
      <div>

        <div className="card text-center">
        <h3>Title: {currentBoard.title}</h3>
        <h4>Created By: {currentBoard.userId}</h4>

        </div>
      </div>
    );
  }
}

export default SpecificBoardList