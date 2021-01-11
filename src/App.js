import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { fetchTodos } from "./redux/action/index";
import "./styles.css";

function App(props) {
  const mTodos = useSelector((state) => state.todos);
  useEffect(() => {
    console.log(mTodos);
    props.fetchTodos();
  }, []);

  return <div className="App">HAHHAH</div>;
}

function mapActionToDispatch(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  };
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, mapActionToDispatch)(App);
