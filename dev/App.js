import { h, app } from "./hyperapp"
import HelloWord from './HelloWord'
import state from './state'
import actions from './actions'

// count 和 actions 是 props 传进来的两个参数
const view = (state, actions) => (
    <div>
        <HelloWord count={state.count} actions={actions} >
            <p>Hello World</p>
        </HelloWord>
    </div>
)




app(state, actions, view, document.body)