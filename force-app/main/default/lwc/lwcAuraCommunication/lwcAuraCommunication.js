import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;

    callAura(){
        // Create the event and assign it to a variable
        const customEvent = new CustomEvent('sendmsg', {
            detail: {
                msg: "Hello From LWC"
            }
        });
        // Dispatch the custom event
        this.dispatchEvent(customEvent);
    }
} 