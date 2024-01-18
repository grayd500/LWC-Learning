// force-app\main\default\lwc\renderMethod\renderMethod.js:

import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {

    render(){
        return renderTemplate
    }

}