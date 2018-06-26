import { h, app } from "./hyperapp"
const HelloWord = ({ count, actions }, children) => (
    <div>
        <h1>{count}</h1>
        {children}
        {/* <p>Hello World</p> 挂载在此处 */}
        <button onclick={() => actions.down(1)}>-</button>
        <button onclick={() => actions.up(1)}>+</button>
    </div>
)

export default HelloWord;