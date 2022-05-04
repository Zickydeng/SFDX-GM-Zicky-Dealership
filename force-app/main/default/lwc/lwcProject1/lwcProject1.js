import { track } from "lwc";
import { LightningElement } from 'lwc';

export default class LwcProject1 extends LightningElement {
   
    @track dynamicGreeting = "Customer welcome and enjoy our services";

   greetingChangeHandler(event) {
       this.dynamicGreeting = event.target.value;
   }
}