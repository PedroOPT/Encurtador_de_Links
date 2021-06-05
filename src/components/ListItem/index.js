import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ContainerButton, Item, ActionContainer } from './styles'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem({data, selectedItem, deleteItem}){

    function RightActions(){
        return(
            <ActionContainer onPress={()=>deleteItem(data.id)}>
                <Feather
                    name='trash'
                    color='#FFF'
                    size={24}
                />
            </ActionContainer>
        )
    }

    return(
        <View>
            <Swipeable renderRightActions={RightActions}>
                <ContainerButton activeOpacity={0.9} onPress={()=>selectedItem(data)} >
                    <Feather
                        name='link'
                        color='#FFF'
                        size={24}
                    />
                    <Item numberOfLiner={1}>{data.long_url}</Item>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}