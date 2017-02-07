import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
}
from 'react-native'

export class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:[],
      newTodo:''
    }
  }
  handleChange(text){
    this.setState({newTodo:text})
  }
  handlePress(){
    const todos = [...this.state.todos,this.state.newTodo]
    this.setState({todos, newTodo:''})
  }
  removeTodo(i){
    const todos = [...this.state.todos.slice(0,i), ...this.state.todos.slice(i + 1)]
    this.setState({todos})
  }
  render(){

    return (
      <View style={styles.container}>
        <TextInput
        style={{height:40,textAlign:'center'}}
        value = {this.state.newTodo}
        onChangeText={this.handleChange.bind(this)}
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
        <Text>create</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo,i)=> {
            return (
              <Text onPress={()=>this.removeTodo.call(this,i)} key={i}>
              <Text>{todo}</Text>
              </Text>
            )
          })}
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:57,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
