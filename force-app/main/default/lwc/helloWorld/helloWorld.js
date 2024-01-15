import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /***Data binding example */
    fullname="Zero To Hero"
    title ="aura"
    changeHandler(event){
        this.title = event.target.value
    }
    /***@track binding exmple */
    @track address={
        city: 'Austin',
        postcode: 78751,
        country: 'USA'
    }
    trackHandler(event){
        this.address.city = event.target.value
    }

    /***getter example */
    users= ["john", "smith", "nik" ]
    userFirst = this.users[0]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0]
    }

    get multiply(){
        return this.num1*this.num2
    }
}