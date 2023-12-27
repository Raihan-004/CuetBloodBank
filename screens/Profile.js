import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import {
    MaterialIcons,
    Feather,
    EvilIcons,
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
} from '@expo/vector-icons'
import { COLORS, FONTS, SIZES, images } from '../constants'
import * as Location from 'expo-location'

const Profile = ({ navigation }) => {
    const [address, setAddress] = useState('Chittagong')
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }

            // device's current location, including latitude and longitude
            let location = await Location.getCurrentPositionAsync()
            const text = JSON.stringify(location)
            const parsedData = JSON.parse(text)
            const longitude = parsedData.coords.longitude
            const latitude = parsedData.coords.latitude
            // everse geocoding step converts the latitude and longitude into a human-readable address
            let address = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            })

            setAddress(
                `${address[0].name},${address[0].district},${address[0].city}`
            )
        }

        getPermissions()
    }, [])
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    // Top left corner on profile "<" 
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        height: 44,
                        width: 44,
                        borderRadius: 4,
                        backgroundColor: COLORS.secondaryWhite,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MaterialIcons
                        name="keyboard-arrow-left" //"<"
                        size={28}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
                <Text style={{ ...FONTS.h4 }}>Profile</Text>
                <TouchableOpacity 
                 //A new page need to create for profile update so we should change the pressed or do the similar thing like register
                    onPress={() => console.log('Pressed')
                }>
                    <Feather name="edit" size={20} color={COLORS.black} />
                </TouchableOpacity>
            </View>
        )
    }

    function renderProfile() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    marginVertical: 22,
                }}
            >
                <Image
                    source={images.user3}
                    resizeMode="contain"
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: SIZES.padding,
                    }}
                />
                <Text style={{ ...FONTS.h2, marginTop: 24 }}>Raihan</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.padding,
                    }}
                >
                    <EvilIcons
                        name="location"
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 8,
                        }}
                    >
                        {address}
                    </Text>
                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity
                   
                    onPress={() => console.log('Pressed')}
                    style={{
                        backgroundColor: COLORS.secondary,
                        width: 150,
                        height: 50,
                        borderRadius: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AntDesign 
                        name="phone"
                        size={24}
                        color={COLORS.white}
                    />
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.white,
                            marginLeft: 12,
                        }}
                    >
                        Call Now
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        backgroundColor: COLORS.primary,
                        width: 150,
                        height: 50,
                        borderRadius: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Entypo name="forward" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.white,
                            marginLeft: 12,
                        }}
                    >
                        Request
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderFeatures() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 22,
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h1 }}>O+</Text>
                    <Text style={{ ...FONTS.body3 }}>Blood Type</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h1 }}>03</Text>
                    <Text style={{ ...FONTS.body3 }}>Donated</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h1 }}>02</Text>
                    <Text style={{ ...FONTS.body3 }}>Requested</Text>
                </View>
            </View>
        )
    }

    function renderSettings() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <MaterialCommunityIcons
                        name="calendar-clock-outline"
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Available for Donate
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <Ionicons
                        name="share-outline"
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Invite a friend
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <Feather name="info" size={24} color={COLORS.primary} />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Get help
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => navigation.navigate('Login')}
                >
                    <AntDesign name="logout" size={24} color={COLORS.primary} />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{ marginHorizontal: 22 }}>
                    {renderHeader()}
                    {renderProfile()}
                    {renderButtons()}
                    {renderFeatures()}
                    {renderSettings()}
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Profile