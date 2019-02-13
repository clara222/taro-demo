import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'
import Tswiper from '../../components/TarSwiper/TarSwiper'
import TabBar from '../../components/TabBar/TabBar'
import { AtGrid } from "taro-ui"
import {GridData} from '../../util/config'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.handleTabClick = this.handleTabClick.bind(this)
    this.onGirdClicked = this.onGirdClicked.bind(this)
    this.state = {
      GridData
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { 
  }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Tswiper />
        <AtGrid data={this.state.GridData} onClick={this.onGirdClicked} />
        <TabBar
          onTabChange={this.handleTabClick}
        />
      </View>
    )
  }
  handleTabClick(value) {
    if (value === 0) {
      Taro.redirectTo({
        url: '/pages/index/index'
      })

    } else if (value === 1) {
      Taro.navigateTo({
        url: '/pages/todoList/todoList'
      })

    } else {
      Taro.navigateTo({
        url: '/pages/user/user'
      })
    }
  }

  onGirdClicked (item,index) {
    console.log(item,index);
  }
}

export default Index
