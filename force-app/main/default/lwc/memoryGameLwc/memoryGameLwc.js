import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';

export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false;
    renderedCallback() {
        if (this.isLibLoaded) {
            return;
        }
        loadStyle(this, fontawesome + '/fontawesome/css/font-awesome.min.css')
            .then(() => {
                console.log("FontAwesome CSS loaded successfully");
            })
            .catch(error => {
                console.error("Error loading the FontAwesome CSS", error);
            });
        this.isLibLoaded = true;
    }
}

