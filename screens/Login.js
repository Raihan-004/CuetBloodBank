import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, images, FONTS, SIZES } from '../constants'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/formActions'

const initialState = {
    // not valid initially
    inputValidities: {
        email: false,
        password: false,
    },
    // overall validity of the entire form
    formIsValid: false,
}
const Login = ({ navigation }) => {

    // useReducer is used to manage the state of the form
    const [formState, dispatchFormState] = useReducer(reducer, initialState)


    // inputChangedHandler is a callback function to handle changes in input values
    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result }) // dispatchFormState is used to update the form state based on the validation result
        },
        [dispatchFormState]
    )

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <PageContainer>
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 22,
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.primary,
                            marginVertical: 48,
                        }}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>
                            Dare
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h1,
                                color: COLORS.secondary,
                                marginHorizontal: 8,
                            }}
                        >
                            To
                        </Text>
                        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>
                            Donate
                        </Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <Input
                            icon="email"
                            iconPack={MaterialIcons}
                            id="email"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities['email']}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                        />
                        <Input
                            icon="lock"
                            iconPack={FontAwesome}
                            id="password"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities['password']}
                            autoCapitalize="none"
                            placeholder="Enter your password"
                            secureTextEntry
                        />
                    </View>
                    <Button
                        title="LOGIN"
                        filled
                        onPress={() => navigation.navigate('BottomTabNavigation')}
                        // onPress={() =>
                        //     navigation.navigate('BottomTabNavigation')
                        // }
                        style={{
                            width: '90%',
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResetPassword')}
                    >
                        <Text
                            style={{...FONTS.body3,color: COLORS.primary,marginVertical: 12}}
                        >
                            Forgot Password
                        </Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            marginVertical: 20,
                            flexDirection: 'row',
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.body3,
                                color: COLORS.black,
                            }}
                        >
                            Don't have an account ?{' '}
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                    color: COLORS.primary,
                                }}
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Login
