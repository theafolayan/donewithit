import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Card from '../components/Card'


export default function ItemListScreen() {
    return (
        <SafeAreaView> 
            <ScrollView> 
                 <View style={{padding: 20, paddingTop: 100, backgroundColor: "#f8f4f4"}} >
      <Card title="Red Chair for sale"
      subtitle="$100"
      image={require('../../assets/chair.jpg')}
            />
             <Card title="Red Chair for sale"
      subtitle="$100"
      image={require('../../assets/chair.jpg')}
            />
             <Card title="Red Chair for sale"
      subtitle="$700"
      image={require('../../assets/chair.jpg')}
    />
  
    </View>
            </ScrollView>
      </SafeAreaView>
    )
}
