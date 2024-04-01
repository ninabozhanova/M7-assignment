// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const $ = (id) => document.getElementById(id)
let employeeForm = $('addForm')
let employeeTable = $('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeNum = $('empCount')
let employeeCount = 0

// ADD EMPLOYEE
employeeForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let fullName = $('name').value
    let ext = $('extension').value
    let email = $('email').value
    let department = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = employeeTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = newRow.insertCell()
    let cellName = newRow.insertCell()
    let cellExt = newRow.insertCell()
    let cellEmail = newRow.insertCell()
    let cellDept = newRow.insertCell()
    let cellDelete = newRow.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID = document.createTextNode(id)
    cellID.appendChild(textID)
    let textName = document.createTextNode(fullName)
    cellName.appendChild(textName)
    let textExt = document.createTextNode(ext)
    cellExt.appendChild(textExt)
    let textEmail = document.createTextNode(email)
    cellEmail.appendChild(textEmail)
    let textDept = document.createTextNode(department)
    cellDept.appendChild(textDept)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)

    // RESET THE FORM
    employeeForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount ++
    employeeNum.textContent = `(${employeeCount})`
})

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (!isNaN(e.target.parentElement.parentElement.rowIndex)) {
        // ASK THE USER FOR CONFIRMATION
        if (confirm(`Are you sure you want to delete employee "${e.target.parentElement.parentElement.children[1].firstChild.nodeValue}" record?`)) {
            // REMOVE THE SELECTED ROW
            employeeTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            // UPDATE THE NUMBER OF EMPLOYEES IN THE TABLE
            employeeCount --
            employeeNum.textContent = `(${employeeCount})`
        }
    }
})