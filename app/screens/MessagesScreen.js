import React, {useState} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import ListItem from '../components/ListItem';

import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum', 
        description : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title : 'Mosh Hamedani',
        description : "I'm interested in this item. when will you be able to post it?",
        image: require('../assets/mosh.jpg')
    },
]

export default function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the message from messages
        const newMessages = setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList data = {messages}
                keyExtractor= {message => message.id.toString()}
                renderItem = {({item}) => 
                    <ListItem 
                        title= {item.title}
                        subTitle = {item.description}
                        image= {item.image}
                        onPress= {() => console.log("Message selected", item)}
                        renderRightActions={() => <ListItemDeleteAction onPress= {() => handleDelete(item)}/>}
                    />}
                    ItemSeparatorComponent={ ListItemSeperator }
                    refreshing={refreshing}
                    onRefresh= {() => {
                        setMessages([
                            {
                                id: 2,
                                title : 'T2',
                                description : 'D2',
                                image: require('../assets/mosh.jpg')
                            },
                        ])
                    }}
            >
            </FlatList>
        </Screen>
    )
}

const styles = StyleSheet.create({})
