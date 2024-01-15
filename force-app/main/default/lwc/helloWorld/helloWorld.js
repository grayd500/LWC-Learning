import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="Zero To Hero"
    title ="aura"

    changeHandler(event){
        this.title = event.target.value
    }

    address={
        city: 'Austin',
        postcode: 78751,
        country: 'USA'
    }

    trackHandler(event){
        this.address= {...this.address, "city":event.target.value} 
    }
}