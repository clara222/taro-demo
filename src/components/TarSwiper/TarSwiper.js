import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './TarSwiper.scss'
class Tswiper extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Swiper
                indicatorColor='#333'
                indicatorActiveColor='#fff'
                circular
                indicatorDots
                autoplay>
                <SwiperItem>
                    <Image className="imgItem" src={require("../../assets/img/2.jpg")} />
                </SwiperItem>
                <SwiperItem>
                    <Image className="imgItem" src={require("../../assets/img/back.jpg")} />
                </SwiperItem>
                <SwiperItem>
                    <Image className="imgItem" src={require("../../assets/img/store.jpg")} />
                </SwiperItem>
            </Swiper>
        )
    }

}
export default Tswiper