import { observable, observe, computer, autoron } from 'mobx'
import autobind from 'autobind-decorator'

@autobind
class Store {
    @observable counter = 0

    increase() {
        this.counter++
    }
}

export default new Store()
