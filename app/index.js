import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';

// import { Home, About, Contact } from './pages';
import { COLORS, SIZES, icons, images, FONT as FONTS } from '../constants';
import { Welcome, CategoryCard, TrendingCard, ScreenHeaderBtn } from '../components';

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" onPress={() => {
                        }} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" onPress={() => {
                        }} />
                    ),
                    headerTitle: ''
                }}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ padding: SIZES.medium, flex: 1 }}>
                    <Welcome />
                </View>
                
            </ScrollView>

        </SafeAreaView>
    );
}


export default Home;