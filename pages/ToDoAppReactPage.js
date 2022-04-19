import { BasePage } from "../core/ui/BasePage";

import { Button } from "../core/ui/controls/Button";
import { Label } from "../core/ui/controls/Label";
import { TextField } from "../core/ui/controls/TextField";
import { ComboBox } from "../core/ui/controls/ComboBox";

const toDoInputTextField = new TextField ('//*[@class = "todo-input"]')
const toDoItemField = new Label ('//*[contains (@class, "todo-item editTodo")]')
const toDoAddButton = new Button ('//*[contains (@class, "todo-button")]')
const toDoCheckAllButton = new Button ('//*[contains (@class, "sortButton")]')
const toDoCompletedItems = new Label ('//*[contains (@class, "completed")]')
const filterOptionMenu = new ComboBox ('//*[@class = "filter-todo"]') 
const clearCompletedButton = new Button ('//*[contains (@class, "clearCompleted")]')
const checkSignleTodoButton = new Button ('//*[contains (@class, "complete-btn")]')
const deleteTodoItemButton = new Button ('//*[contains (@class, "trash-btn")]')
const itemLeftCounter = new Label ('//span[@class =  "itemLeftCounter"]')


export class ToDoAppReactApp extends BasePage {

    getToDoItemText() {
        return toDoItemField.getText()
    }
    editToDoItemText (value) {
        toDoItemField.element.setValue(value)

    }

    deleteToDoItemText () {
        return toDoItemField.element.setValue('')
    }

    fillInToDoInputTextField (value) {
        toDoInputTextField.setValue(value)
    }

    setFilterOption(value){
        filterOptionMenu.selectByValue(value)
    }

    getItemClass(){
        return toDoItemField.getAttribute('class')
    }

    getItemPlaceHolder(){
        return toDoItemField.getAttribute('placeholder')
    }

    getItemValue(){
        return toDoItemField.getValue()
    }

    getTextFromItemLeftCounter() {
        return itemLeftCounter.getText()
    }

    clickOnDeleteTodoItemButton() {
        deleteTodoItemButton.click()
    }
 
    pressEnterKey() {
        browser.keys('\uE007')
    }
    checkToDoItemFieldIsExist(){
        return toDoItemField.isExisting()
    }
    
    clickOnAddButton () {
        toDoAddButton.click()
    }

    countAllItems() {
        return toDoItemField.elements.length
    }
    countCompletedItems () {
        return toDoCompletedItems.elements.length
    }

    clickOnCheckAllButton () {
        toDoCheckAllButton.click()
    }

    clickOnCheckSignleTodoButton () {
        checkSignleTodoButton.click()
    }
    
    clickOnClearCompletedButton () {
        clearCompletedButton.click()
    }

    addMultipleToDoItems (amount) {
        let text = '1'
        for (let i = amount; i > 0; i--){
            toDoInputTextField.setValue(text)
            toDoAddButton.click()
            text = text + '1'
        }
    }

}