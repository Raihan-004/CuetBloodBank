import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'
import { COLORS, SIZES, FONTS } from '../constants'
import Slideshow from 'react-native-image-slider-show'
import { categories } from '../constants/data'
import DonationCard from '../components/DonationCard'
import { donationRequests } from '../constants/data'


const Home =  ({ navigation }) => {
    const [position, setPosition] = useState(0)
    const [dataSource, setDataSource] = useState([
        {
            url: 'https://i.ibb.co/YXKSm0q/16262070-tp227-facebookeventcover-06.jpg',
        },
        {
            url: 'https://i.ibb.co/vhBbSQf/16262056-tp227-facebookeventcover-04.jpg',
        },
    ])

    useEffect(() => {
        const toggle = setInterval(() => {
            setPosition(position === dataSource.length - 1 ? 0 : position + 1)
        }, 3000)

        return () => clearInterval(toggle)
    })

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 12,
                }}
            >
                <View>
                    <View
                        style={{
                            height: 6,
                            width: 6,
                            backgroundColor: COLORS.primary,
                            borderRadius: 3,
                            position: 'absolute',
                            right: 5,
                            top: 5,
                        }}
                    ></View>

                    {/* Notification page will be shown after Pressed, need to change here */}
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Ionicons
                            name="notifications-outline"
                            size={28}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Profile')}>
                        <AntDesign
                            name="user"
                            size={25}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderSliderBanner() {
        return (
            <View
                style={{
                    height: 200,
                    width: '100%',
                }}
            >
                <Slideshow position={position} dataSource={dataSource} />
            </View>
        )
    }

    // function renderFeatures() {
    //     return (
    //         <View
    //             style={{
    //                 marginVertical: SIZES.padding,
    //                 width: '100%',
    //                 flexDirection: 'row',
    //                 justifyContent: 'space-between',
    //                 flexWrap: 'wrap',
    //             }}
    //         >
    //             {categories.map((category, index) => (
    //                 <TouchableOpacity
    //                     key={index}
    //                     style={{
    //                         height: 120,
    //                         width: 110,
    //                         borderColor: COLORS.secondaryWhite,
    //                         borderWidth: 2,
    //                         backgroundColor: COLORS.white,
    //                         borderRadius: 10,
    //                         alignItems: 'center',
    //                         justifyContent: 'center',
    //                         marginBottom: 22,
    //                     }}
    //                 >
    //                     <Image
    //                         source={category.icon}
    //                         resizeMode="contain"
    //                         style={{
    //                             height: 40,
    //                             width: 40,
    //                             marginVertical: 12,
    //                         }}
    //                     />
    //                     <Text
    //                         style={{
    //                             ...FONTS.body3,
    //                             color: COLORS.secondaryBlack,
    //                         }}
    //                     >
    //                         {category.title}
    //                     </Text>
    //                 </TouchableOpacity>
    //             ))}
    //         </View>
    //     )
    // }

    function renderDonationCard() {
        return (
            //copy from donationRequest
            <ScrollView>
            {donationRequests.map((donationRequest, index) => (
                //see DonationCard for what each request have
                // we need to change donationRequests from data to get proper output
                <DonationCard
                    key={index}
                    name={donationRequest.name}
                    location={donationRequest.location}
                    postedDate={donationRequest.postedDate}
                />
            ))}
        </ScrollView>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ marginHorizontal: 22 }}>
                {renderHeader()}
                {renderSliderBanner()}
                {/* {renderFeatures()} */}
                {renderDonationCard()}
            </View>
        </SafeAreaView>
    )
}

export default Home
