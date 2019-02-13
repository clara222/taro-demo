import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'
class UserCenter extends Component {
    config = {
        navigationBarTitleText: '个人中心'
    }
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View>
                {process.env.TARO_ENV === 'h5' ? <NavBar onNavChange={this.handleNavClicked} />: ''}
                <Text>user</Text>
            </View>
        )
    }

    handleNavClicked() {
        Taro.redirectTo({
            url: '/pages/index/index'
        })
    }
}
export default UserCenter