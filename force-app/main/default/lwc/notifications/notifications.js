import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {

    toastHandler(){
            this.showToast("Success!!", "Account Created!!", "success")
    }
    toastHandlerTwo(){
        this.showToast("Error!!", "Account Creation Failed!!", "error")
    }
    toastHandlerThree(){
        this.showToast("Warning!!", "Password should have 15 characters!!", "warning")
    }
    toastHandlerFour(){
        this.showToast("Info", "Summer 24 release is available", "info")
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
        })
        this.dispatchEvent(event)
    }
}