import { LightningElement, track, wire} from 'lwc';
import saveToDo from "@salesforce/apex/ToDoController.saveToDo";
import getToDos from "@salesforce/apex/ToDoController.getToDos";
import deleteTodo from "@salesforce/apex/ToDoController.deleteTodo";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Todoapp extends LightningElement {
    @track todoRecord;
    @track columns = [
        { label: 'ToDoRecord__c', fieldName: 'ToDoRecord__c' },
        { label: 'Id', fieldName: 'Id'}
    ];
   @track accountList;
   connectedCallback() { 
    getToDos()
    .then((data) => {
        this.accountList = data;
    })
    .catch((error) => { 
        this.toToastMessage('Error In Getting ToDo Items',JSON.stringify(error),'error');
    });
   }
    getToDo(event) {
        this.todoRecord = event.target.value ;
    }
    addToDo()  {
        this.todoRecord = this.todoRecord.replaceAll('</p>','')
        this.todoRecord = this.todoRecord.replaceAll('<p>','')
        this.todoRecord = this.todoRecord.replaceAll('<br>','')
        this.accountList = [];
        this.createToDoRecord();
        
    }
    createToDoRecord() {
        saveToDo({ doDoName: this.todoRecord, record: this.todoRecord })
        .then((data) => {
            this.accountList = data;
            this.toToastMessage('Success','ToDo Created','success');
           
        })
        .catch((error) => { 
            this.toToastMessage('Error in create todo',JSON.stringify(error),'error');
        });
        this.getAllToDos();
    }
    deleteTodo(event) { 
        this.accountList = [];
        let toDoToDelete = event.target.value;
        deleteTodo({ toDoId: toDoToDelete })
        .then((data) => {
            this.accountList = data;
            this.toToastMessage('Success','ToDo deleted successfully','warning');
           
        })
        .catch((error) => { 
            this.toToastMessage('Error In delete',JSON.stringify(error),'error');
        });
        this.getAllToDos();
    }
    toToastMessage(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title: title, message: message, variant: variant }));
    }
}