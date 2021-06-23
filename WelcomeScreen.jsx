import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
const Welcome = (props) => {
    return (
        <ViewPager style={styles.viewPager} initialPage={0} showPageIndicator={true}>
            <View
                style={{
                    backgroundColor: 'white',
                    alignItems: 'center',
                }}>
                <Text style={{ color: 'black', fontSize: 30, marginTop: 150 }}>{`ようこそ！
                `}</Text>
                <Text style={{ color: 'black', fontSize: 22, width: '75%', marginTop: 50 }}>Welcomeハイシンクジャパンへ！Welcomeハイシンクジャパンへ！Welcomeハイシンクジャパンへ！Welcomeハイシンクジャパンへ！Welcomeハイシンクジャパンへ！Welcomeハイシンクジャパンへ！</Text>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                }}>
                <Text style={{ color: 'black', fontSize: 30, marginTop: 150 }}>{`利用規約
                `}</Text>
                <Text style={{ color: 'black', fontSize: 22, width: '75%', marginTop: 50 }}>私的利用は厳禁であるため、予めご了承ください。さもなくば法的措置にて対応させていただきます。さてお読みになりましたら、どうぞ前へとお進みください！！！！！！！</Text>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                }}>
                <Text style={{ color: 'black', fontSize: 30, marginTop: 150 }}>{`参りましょう！
                `}</Text>
                <Image
                    style={{ width: 250, height: 230 }}
                    source={require('../../assets/111.png')}
                />
                <View style={styles.button}>
                    <Button
                        title="ログイン画面へ"
                        color="white"
                        onPress={() => props.navigation.navigate('Login')}
                    />
                </View>
            </View>
        </ViewPager>
    );
};


export default Welcome;

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    button: {
        marginTop: 60,
        height: 50,
        width: 200,
        padding: 7,
        backgroundColor: '#1e90ff',
        margin: 3,
        borderRadius: 50,
    },
});
