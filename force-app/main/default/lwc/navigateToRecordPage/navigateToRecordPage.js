import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin (LightningElement) {
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0037i00001DS9hpAAD',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
}