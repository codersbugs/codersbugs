import { LightningElement } from 'lwc';
export default class ChildC extends LightningElement {
    sendInputValuesToParent(event) {
        this.dispatchEvent(
            new CustomEvent("inputchange", { detail: { value: event.target.value, name: this.name } })
          );
    }
}