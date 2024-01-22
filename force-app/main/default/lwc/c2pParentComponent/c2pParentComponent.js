// force-app\main\default\lwc\c2pParentComponent\c2pParentComponent.js:
import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false
    clickHandler(){
        this.showModal = true
    }
    closeHandler(){
        this.showModal = false
    }
}