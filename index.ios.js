// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableHighlight
// } from 'react-native';
//
// export default class Todo extends Component {
//   constructor(props){
//     super(props)
//
//     this.state = {
//       todos : [1,2,3],
//       newTodo : ''
//     }
//   }
//
//   handleChange(e){
//     const { value } = e.target;
//     this.setState({newTodo:value})
//   }
//   handlePress(){
//     this.setState({todos:[...this.state.todos,this.state.newTodo]})
//     console.log(this.state.todos)
//   }
//
//   render() {
//
//     return (
//       <View style={styles.container}>
//         <Text>Enter Todo</Text>
//       <TextInput style={{height: 40, borderColor: 'gray', textAlign:'center'}} onChange={this.handleChange.bind(this)}/>
//         <TouchableHighlight onPress={this.handlePress.bind(this)}>
//           <Text>
//             Tap Me
//           </Text>
//         </TouchableHighlight>
//         {this.state.todos.map((item,i)=>{
//         return <Text key={i}>
//           {item}
//         </Text>
//       })}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//     backgroundColor:'black'
//   },
// });
//
// AppRegistry.registerComponent('Todo', () => Todo);
import React, { Component } from 'react';
import {AppRegistry,StyleSheet} from 'react-native';
import {Todo} from './src/Todo'

const Main = () => (<Todo />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

AppRegistry.registerComponent('Todo', () => Main);
