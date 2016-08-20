import { reaction, observable, observe, computer, autoron } from 'mobx'
import autobind from 'autobind-decorator'
import axios from 'axios'

@autobind
class Store {
    @observable counter = 0
    @observable isLoading = false
    @observable message = ''

    increase() {
        this.counter++
    }

    fetchData() {
        this.isLoading = true
        this.message = ''

        // const BASE_URL = 'http://10.10.14.141:8000/';
        axios.get(BASE_URL + '/test')
            .then(response => {
                this.message = response.data.message
                this.isLoading = false
            })
            .catch(error => console.error(error))
    }
}

export default new Store()
