import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { FONTS, COLORS, SIZES, images } from '../constants'
import { MaterialIcons, FontAwesome, Fontisto,AntDesign } from '@expo/vector-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/formActions'

const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}

const Post = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result })
        },
        [dispatchFormState]
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            marginHorizontal: 32,
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={images.logo}
                            resizeMode="contain"
                            style={{
                                tintColor: COLORS.primary,
                                marginVertical: 22,
                            }}
                        />

                        {/* <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{ ...FONTS.h1, color: COLORS.primary }}
                            >
                                Dare
                            </Text>
                            <Text
                                style={{
                                    ...FONTS.h1,
                                    color: COLORS.black,
                                    marginHorizontal: 8,
                                }}
                            >
                                To
                            </Text>
                            <Text
                                style={{ ...FONTS.h1, color: COLORS.primary }}
                            >
                                Donate
                            </Text>
                        </View> */}

                        <View style={{ marginVertical: 20 }}>
                            <Input
                                icon="user"
                                iconPack={FontAwesome}
                                id="fullName"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['fullName']
                                }
                                placeholder="Enter Patient Name"
                            />
                           
                            <Input
                                icon="phone"
                                iconPack={FontAwesome}
                                id="phoneNumber"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['phoneNumber']
                                }
                                placeholder="Phone Number"
                            />

                            <Input
                                icon="blood-drop"
                                iconPack={Fontisto}
                                id="bloodType"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['bloodType']
                                }
                                placeholder="Required Blood Group"
                            />
                            <Input
                                icon="blood"
                                iconPack={Fontisto}
                                id="bloodBag"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['bloodBag']
                                }
                                placeholder="Amount of Required Blood"
                            />

                            <Input
                                icon="location-on"
                                iconPack={MaterialIcons}
                                id="location"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['location']
                                }
                                placeholder="Location"
                            />
                            <Input
                                icon="questioncircleo"
                                iconPack={AntDesign}
                                id="whyNeeded"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['whyNeeded']
                                }
                                placeholder="Why do You need Blood?"
                            />
                        </View>
                        <Button
                            title="Post"
                            filled
                            //whenever a post is done it will update database
                            onPress={() => navigation.navigate('Home')}
                            style={{
                                width: '100%',
                            }}
                        />
                    </View>
                </ScrollView>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Post
