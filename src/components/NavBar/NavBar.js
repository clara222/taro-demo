import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
class NavBar extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <View>
                <AtNavBar
                    onClickLeftIcon={this.handleClick}
                    color='#6190E8'
                    leftIconType='chevron-left'
                />
            </View>
        )
    }

    handleClick() {
        const { onNavChange } = this.props
        onNavChange()
    }
}
export default NavBar