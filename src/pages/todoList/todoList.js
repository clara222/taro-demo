import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'
import { AtInput, AtButton, AtList, AtListItem } from 'taro-ui'

import { connect } from '@tarojs/redux'
import { add, minus } from '../../actions/todolist'
@connect(({ todolist }) => ({
    todolist
}), (dispatch) => ({
    onAdd(item) {
        dispatch(add(item))
    },
    onDec(index) {
        dispatch(minus(index))
    }
}))

class TodoList extends Component {
    config = {
        navigationBarTitleText: '代办事项'
    }
    constructor(props) {
        super(props)
        this.handleNavClicked = this.handleNavClicked.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <View>
                {process.env.TARO_ENV === 'h5' ? <NavBar onNavChange={this.handleNavClicked} /> : ''}

                <View className='at-row at-row__justify--around at-row__align--end'>
                    <View className='at-col at-col-9'>
                        <AtInput
                            name='value'
                            title='代办事项'
                            type='text'
                            placeholder='请输入代办事项'
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        />
                    </View>
                    <View className='at-col at-col-3'>
                        <AtButton type='primary' size='small' onClick={this.handelSubmit}>提交</AtButton>
                    </View>
                </View>

                <AtList className="list">
                    {
                        this.props.todolist.todoList.map((item, index) => {
                            return (
                                <AtListItem title={item.title} isSwitch switchIsCheck={item.isComplete}
                                    onSwitchChange={this.handleOpenChange.bind(this, index)}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </AtList>

            </View>
        )
    }

    handleChange(value) {
        this.setState({
            value
        })
    }

    handelSubmit() {
        const item = {
            title: this.state.value,
            isComplete: false
        }
        this.props.onAdd(item)
        this.setState({
            value: ''
        })
    }

    handleOpenChange(index) {
        console.log(index);
        this.props.onDec(index)
    }

    handleNavClicked() {
        Taro.redirectTo({
            url: '/pages/index/index'
        })
    }
}
export default TodoList