import { reaction, observable, observe, computer, autoron } from 'mobx'
import autobind from 'autobind-decorator'
import axios from 'axios'
import firebase from 'firebase'
import env from './env'
import config from './config'

firebase.initializeApp(config.firebase)

@autobind
class Store {
    @observable isLoading = false
    @observable realtimeData = { message: "" }
    @observable message = ''

    constructor() {
        let dataRef = firebase.database().ref('test')
        dataRef.on('value', snapshot => {
            this.realtimeData.message = snapshot.val().data
        })
    }

    fetchData() {
        this.isLoading = true
        this.message = ''

        axios.get(env.BASE_URL + '/test')
            .then(response => {
                this.message = response.data.message
                this.isLoading = false
            })
            .catch(error => console.error(error))
    }
}

export default new Store()
