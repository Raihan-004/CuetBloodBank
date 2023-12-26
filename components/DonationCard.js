import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

const DonationCard = (props) => {
    return (
        <View
            style={{
                width: SIZES.width - 44,
                height: 148,
                borderRadius: SIZES.padding,
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                marginVertical: 8,
                borderColor: COLORS.secondaryGray,
                borderWidth: 3,
                elevation: 2,
                shadowColor: COLORS.secondaryGray,
                shadowRadius: 7,
            }}
        >
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.secondaryBlack,
                        marginVertical: 2,
                    }}
                >
                    Name
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.black,
                        fontWeight: 500,
                    }}
                >
                    {props.name}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.secondaryBlack,
                        marginVertical: 2,
                    }}
                >
                    Location
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.black,
                        fontWeight: 500,
                        marginVertical: 2,
                    }}
                >
                    {props.location}
                </Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>
                    {props.postedDate}
                </Text>
            </View>

            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={icons.bplusIcon}
                    resizeMode="contain"
                    style={{
                        marginBottom: 32,
                    }}
                />

                {/* //Here for donation there will be option for contact or sms */}
                <TouchableOpacity onPress={props.onPress}>
                    <Text
                        style={{
                            ...FONTS.h4,
                            color: COLORS.primary,
                        }}
                    >
                        Donate
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DonationCard
