// force-app\main\default\lwc\lmsComponentA\lmsComponentA.js:
import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe,  publish} from 'lightning/messageService'
export default class LmsComponentA extends LightningElement {
    inputValue
    recievedMessage
    subscription
    @wire(MessageContext)
    context

    inputHandler(event){
        this.inputValue = event.target.value
    }

    publishMessage(){
        const message={
            lmsData:{
                value: this.inputValue,
                publisher: 'lmsComponentA' // Unique identifier for the publisher
            }
        };
        publish(this.context, SAMPLEMC, message);
    }
    

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        this.subscription= subscribe(this.context,  SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        if (message.lmsData.publisher !== 'lmsComponentA') { // Check publisher ID
            this.recievedMessage = message.lmsData.value ? message.lmsData.value : 'NO Message published';
        }
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
}