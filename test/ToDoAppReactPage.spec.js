

let text = 'text'

describe('ToDo input. Filling in textField and adding toDo items', () => {
    logTestName('Filling in and adding toDo items')
    it('Filling text and adding with Enter key ', () =>{

        logStep("Add ToDo item with Enter Key");
            ToDoAppReact.fillInToDoInputTextField(text)
            ToDoAppReact.pressEnterKey()
        expect(ToDoAppReact.checkToDoItemFieldIsExist()).to.be.true
    });

    it('Filling text and adding with AddButton ', () =>{
        logStep("Add ToDo item with AddButton");
            ToDoAppReact.fillInToDoInputTextField(text)
            ToDoAppReact.clickOnAddButton ()
        expect(ToDoAppReact.checkToDoItemFieldIsExist()).to.be.true
    });   

    it('Filling text and adding with AddButton ', () =>{
        logStep("Adding 10 items in a row");
            ToDoAppReact.addMultipleToDoItems(10)
        expect(ToDoAppReact.countAllItems()).to.be.equal(10)
    });
    it('Empty Field adding with AddButton ', () =>{
        logStep("Click Add Button");
            ToDoAppReact.clickOnAddButton ()
        expect(ToDoAppReact.checkToDoItemFieldIsExist()).to.be.false
    });
    it('Empty Field adding with Enter Key ', () =>{
        logStep("Click Add Button");
            ToDoAppReact.pressEnterKey()
        expect(ToDoAppReact.checkToDoItemFieldIsExist()).to.be.false
    });
});

describe('ToDo Items Buttons. Check and Delete Button', () => {
    logTestName('Checking and Deleting ToDo items')
    it('ToDo item adding status completed', () =>{
        logStep("Add new item");
            ToDoAppReact.addMultipleToDoItems(1)
        logStep("Click on Check Button to add status completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()
        expect(ToDoAppReact.getItemClass()).to.contain('completed')
    });

    it('ToDo item removing status completed', () =>{
        logStep("Add new item");
            ToDoAppReact.addMultipleToDoItems(1)
        logStep("Click on Check Button to add status completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()
        logStep("Expect Status Changed to completed");
            expect(ToDoAppReact.getItemClass()).to.contain('completed')
        logStep("Click on Check Button to remove status completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()
        expect(ToDoAppReact.getItemClass()).to.not.contain('completed')
    });

    it('Deliting ToDo list item w/o completed Status', () =>{
        logStep("Add new item");
            ToDoAppReact.addMultipleToDoItems(1)
        logStep("Click on Delete Button");
            ToDoAppReact.clickOnDeleteTodoItemButton()
        expect(ToDoAppReact.checkToDoItemFieldIsExist()).to.be.false
    });  

    it('Deliting ToDo list item with completed Status', () =>{
        logStep("Add new item");
            ToDoAppReact.addMultipleToDoItems(1)
        logStep("Click on Check Button to add status completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()
        logStep("Click on Delete Button");
            ToDoAppReact.clickOnDeleteTodoItemButton()
        expect(ToDoAppReact.checkToDoItemFieldIsExist()).to.be.false
    });  
}); 

describe('ToDo Global Buttons. Check All and Clear Completed', () => {
    logTestName('Checking all item and deleting completed')
    it('Completed all uncompleted ToDo Items', () =>{
        logStep("Adding 10 items");
            ToDoAppReact.addMultipleToDoItems(10)
        logStep("Click On Check All Button");
            ToDoAppReact.clickOnCheckAllButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(10)
    });

    it('Complete all when items have different status', () =>{
        logStep("Add 1 completed item");
            ToDoAppReact.addMultipleToDoItems(1)
            ToDoAppReact.clickOnCheckSignleTodoButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(1)
        logStep("Add 9 uncompleted item");
            ToDoAppReact.addMultipleToDoItems(9)
        logStep("Click On Check All Button");
            ToDoAppReact.clickOnCheckAllButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(10)
    });

    it('Uncomplete all completed items', () =>{
        logStep("Adding 10 items");
            ToDoAppReact.addMultipleToDoItems(10)
        logStep("Click On Check All Button");
            ToDoAppReact.clickOnCheckAllButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(10)
        logStep("Click On Check All Button again");
            ToDoAppReact.clickOnCheckAllButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(0)
    });


    it('Click On Clear Completed when all ToDo Items completed', () =>{
        logStep("Adding 10 items");
            ToDoAppReact.addMultipleToDoItems(10)
        logStep("Click On Check All Button");
            ToDoAppReact.clickOnCheckAllButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(10)
        logStep("Click On Clear Completed Button");
            ToDoAppReact.clickOnClearCompletedButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(0)
    });

    it('Click On Clear Completed when all ToDo Items have mix status', () =>{
        logStep("Add 1 completed item");
            ToDoAppReact.addMultipleToDoItems(1)
            ToDoAppReact.clickOnCheckSignleTodoButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(1)
        logStep("Add 9 uncompleted item");
            ToDoAppReact.addMultipleToDoItems(9)
        logStep("Click On Clear Completed Button");
            ToDoAppReact.clickOnClearCompletedButton()
        expect(ToDoAppReact.countAllItems()).to.be.equal(9)
    });

    it('Click On Clear Completed when all ToDo Items uncompleted', () =>{
        logStep("Adding 10 items");
            ToDoAppReact.addMultipleToDoItems(10)
        logStep("Click On Clear Completed Button");
            ToDoAppReact.clickOnClearCompletedButton()
        expect(ToDoAppReact.countAllItems()).to.be.equal(10)
    });
}); 

describe('Testing value of Item left block', () => {
    logTestName('Checking items left Values')
    it('Item left value is equal to amount of all new added items', () =>{
        logStep("Adding 10 items");
            ToDoAppReact.addMultipleToDoItems(10)
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('10 items left')
    });

    it('Item left value is changing after adding extra items', () =>{
        logStep("Adding 7 items");
            let items = 7
            ToDoAppReact.addMultipleToDoItems(items)
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal(`${items} items left`)
        logStep("Adding extra 7 items");
            ToDoAppReact.addMultipleToDoItems(items)
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal(`${items + items} items left`)
    });

    it('Item left value is changing after making some items completed', () =>{
        logStep("Add 9 uncompleted item");
            ToDoAppReact.addMultipleToDoItems(9)
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('9 items left')
        logStep("Make 1 completed item");
            ToDoAppReact.clickOnCheckSignleTodoButton()
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('8 items left')

    });

    it('Item left value is equal to 0 after clicking on Check All Button', () =>{
        logStep("Adding 10 items");
            ToDoAppReact.addMultipleToDoItems(10)
        logStep("Click On Check All Button");
            ToDoAppReact.clickOnCheckAllButton()
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('0 items left')
    });

    it('Item left value is equal to amount of all items after removing items with complete status', () =>{
        logStep("Add 9 uncompleted item");
            ToDoAppReact.addMultipleToDoItems(9)
        logStep("Make 1 item Completed ");
            ToDoAppReact.clickOnCheckSignleTodoButton()    
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('8 items left')
        logStep("Delete All completed Items");
            ToDoAppReact.clickOnClearCompletedButton() 
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('8 items left')
    });

    it('Item left value is changing after deleting uncompleted items', () =>{
        logStep("Add 1 uncompleted item");
            ToDoAppReact.addMultipleToDoItems(1)
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('1 items left')  
        logStep("Delete 1 uncompleted item");
            ToDoAppReact.clickOnDeleteTodoItemButton()
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('0 items left')  
    });

    it('Item left value is equal to 0 after deleting all items', () =>{
        logStep("Adding 10 items");
            ToDoAppReact.addMultipleToDoItems(10)
        logStep("Click On Check All Button");
            ToDoAppReact.clickOnCheckAllButton()
        expect(ToDoAppReact.countCompletedItems()).to.be.equal(10)
        logStep("Click On Clear Completed Button");
            ToDoAppReact.clickOnClearCompletedButton()
        expect(ToDoAppReact.getTextFromItemLeftCounter()).to.be.equal('0 items left')
    });
}); 

describe('ToDo items display with different Status Filters', () => {
    logTestName('Checking Status Filters display')
    it('All Filter Display Check', () =>{
        logStep("Add 3 uncompleted items");
            ToDoAppReact.addMultipleToDoItems(3)
        logStep("Make 1 Item Completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()  
        logStep("Switch to filter All");
            ToDoAppReact.setFilterOption('All')
        expect(ToDoAppReact.countAllItems()).to.be.equal(3)
    });

    it('Completed Filter Display Check', () =>{
        logStep("Add 3 uncompleted items");
            ToDoAppReact.addMultipleToDoItems(3)
        logStep("Make 1 Item Completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()  
        logStep("Switch to filter Completed");
            ToDoAppReact.setFilterOption('Completed')
        expect(ToDoAppReact.countAllItems()).to.be.equal(1)
    });

    it('Uncompleted Filter Display Check', () =>{
        logStep("Add 3 uncompleted items");
            ToDoAppReact.addMultipleToDoItems(3)
        logStep("Make 1 Item Completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()  
        logStep("Switch to filter Uncompleted");
            ToDoAppReact.setFilterOption('Uncompleted')
        expect(ToDoAppReact.countAllItems()).to.be.equal(2)
    });

    it('All Filter after changes Display Check', () =>{
        logStep("Switch to filter All");
            ToDoAppReact.setFilterOption('All')
        expect(ToDoAppReact.countAllItems()).to.be.equal(0)   
        logStep("Add 3 uncompleted items");
            ToDoAppReact.addMultipleToDoItems(3)
        expect(ToDoAppReact.countAllItems()).to.be.equal(3)  
        logStep("Make 1 Item Completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()
        expect(ToDoAppReact.countAllItems()).to.be.equal(3)    
    });

    it('Completed after changes Filter Display Check', () =>{
        logStep("Switch to filter Completed");
            ToDoAppReact.setFilterOption('Completed')
        expect(ToDoAppReact.countAllItems()).to.be.equal(0)   
        logStep("Add 3 uncompleted items");
            ToDoAppReact.addMultipleToDoItems(3)
        expect(ToDoAppReact.countAllItems()).to.be.equal(0)  
        logStep("Make 1 Item Completed");
            ToDoAppReact.setFilterOption('All')
            ToDoAppReact.clickOnCheckSignleTodoButton()
            ToDoAppReact.setFilterOption('Completed')
        expect(ToDoAppReact.countAllItems()).to.be.equal(1) 
    });

    it('Uncompleted after changes Filter Display Check', () =>{
        logStep("Switch to filter Uncompleted");
            ToDoAppReact.setFilterOption('Uncompleted')
        expect(ToDoAppReact.countAllItems()).to.be.equal(0)   
        logStep("Add 3 uncompleted items");
            ToDoAppReact.addMultipleToDoItems(3)
        expect(ToDoAppReact.countAllItems()).to.be.equal(3)  
        logStep("Make 1 Item Completed");
            ToDoAppReact.clickOnCheckSignleTodoButton()
        expect(ToDoAppReact.countAllItems()).to.be.equal(2) 
    });
}); 

describe('ToDo item Text Edit ', () => {
    logTestName('Checking items Text Editor')
    it('Change ToDo item text value', () =>{
        logStep("Add ToDo item");
            ToDoAppReact.fillInToDoInputTextField(text)
            ToDoAppReact.pressEnterKey()
        logStep("Change ToDo Item Text");
            ToDoAppReact.editToDoItemText ('value')
        expect(ToDoAppReact.getItemValue()).to.be.equal('value')
    });
    
    it('Removing value return original value', () =>{
        logStep("Add ToDo item");
            ToDoAppReact.fillInToDoInputTextField(text)
            ToDoAppReact.pressEnterKey()
        logStep("Change ToDo Item Text");
            ToDoAppReact.editToDoItemText ('value')
        logStep("Delete all Text");
            ToDoAppReact.deleteToDoItemText ()
        expect(ToDoAppReact.getItemPlaceHolder()).to.be.equal(text)
    });
}); 
