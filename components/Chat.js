import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { List,ListItem} from 'react-native-elements'
import { users } from './data';


 export default class Chat extends Component {
  render() {
    console.log("this is data",users)
    return (
      <View>
        <List>
            {users.map((user) =>{
                console.log("this is great",user.name);
                // <TouchableOpacity>
                  
                //     <ListItem 
                //         key={user.id}
                //         roundAvatar
                        
                //         title={user.name[1]}
                //         subtitle={user.email[1]}
                //     />
                // </TouchableOpacity>
            })}
        </List>
      </View>
    );
  }
}
Chat.defaultProps = { ...users}
