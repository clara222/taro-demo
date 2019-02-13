import Taro, { Component } from '@tarojs/taro';
import { AtTabBar } from 'taro-ui'
class TabBar extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
            tabList: [
                { title: '首页', iconType: 'home' },
                { title: '待办事项', iconType: 'bullet-list' },
                { title: '我的', iconType: 'user' }
            ]
        }
    }
    handleClick(value) {
        this.setState({
            current: value
        })
        const { onTabChange } = this.props
        onTabChange(value)
    }

    componentDidShow() { 
        this.setState({
            current: 0
        })
    }
    render() {
        return (
            <AtTabBar
                fixed
                tabList={this.state.tabList}
                onClick={this.handleClick.bind(this)}
                current={this.state.current}
            />
        )
    }
}
export default TabBar