var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
};

function showList() {
    var myTable = '<table class="table table-hover"><thead><tr><th>First Name</th><th>LastName</th>'
        + '<th>Phone</th><th>Salary</th><th>View</th><th>Delete</th></tr></thead>';
    myTable += '<tbody>';
    var filter = document.getElementById('filterInput');
    var strFilter = '';
    strFilter = filter.value;
    for (var i in employeesList) {
        if (employeesList[i].firstName.indexOf(strFilter) < 0 && employeesList[i].lastName.indexOf(strFilter) < 0) {
            continue;
        }
        myTable +=
            '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName
            + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td>'
            + '<td><button onclick="view(' + i + ')">View</button></td>'
            + '<td><button onclick="deleter(' + i + ')">Delete</button></td></tr>';
    }
    myTable += '<tr id="lastRow"></tr></tbody></table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    lastRow();
}

function lastRow() {
    var objFirstName = {};
    var objLastName = {};
    var sum = 0.0;
    var list = {};
    for (var i = 0; i < 10; i++) {
        list[i] = 0;
    }
    for (var i in employeesList) {
        if (employeesList[i].firstName in objFirstName) {
            objFirstName[employeesList[i].firstName] += 1;
        } else {
            objFirstName[employeesList[i].firstName] = 1;
        }
        if (employeesList[i].lastName in objFirstName) {
            objLastName[employeesList[i].lastName] += 1;
        } else {
            objLastName[employeesList[i].lastName] = 1;
        }
        for (var j = 0; j < employeesList[i].phone.length; j++) {
            list[parseInt(employeesList[i].phone[j])] += 1;
        }
        sum += employeesList[i].salary;
    }
    var max = 0, firstName = '';
    for (var key in objFirstName) {
        if (objFirstName[key] > max) {
            max = objFirstName[key];
            firstName = key;
        }
    }
    var uniqueLastName = 0;
    for (var key in objLastName) {
        uniqueLastName++;
    }
    var strAux = '<td>' + firstName + '</td>';
    strAux += '<td>' + uniqueLastName + '</td>';
    keysSorted = Object.keys(list).sort(function (a, b) {
        return list[b] - list[a];
    });
    if (list[keysSorted[0]] > 0) {
        strAux += '<td>' + keysSorted[0];
        for (var i = 1; i < 5; i++) {
            if (list[keysSorted[i]] === 0) {
                break;
            }
            strAux += ', ' + keysSorted[i];
        }
        strAux += '</td>';
    } else {
        strAux += '<td></td>';
    }
    sum /= employeesList.length;
    strAux += '<td  style="text-align: center" colspan="3">' + sum + '</td>';
    var container = document.getElementById('lastRow');
    container.innerHTML = strAux;
}


function view(ind) {
    alert(employeesList[ind].firstName + ' ' + employeesList[ind].lastName);
}

function deleter(ind) {
    employeesList.splice(ind, 1);
    showList();
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = parseFloat(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function deleteLast() {
    if (employeesList.length > 0) {
        employeesList.pop();
    }
    showList();
}

function showTotal() {
    var container = document.getElementById('salarycontainer');
    var sum = 0.0;
    for (var i in employeesList) {
        sum += employeesList[i].salary
    }
    container.innerHTML = "<p style='float: right'>Salary total = " + sum + "</p>";
}

function compareFunc(key) {
    return function (a, b) {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    }
}


function sorter() {
    var sortOption = document.getElementById('sortOption');
    var option = parseInt(sortOption.value);
    var key = '';
    switch (option) {
        case 1:
            employeesList.sort(function (a, b) {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                if (a.firstName > b.firstName) {
                    return 1;
                }
                return 0;
            });
            showList();
            break;
        case 2:
            employeesList.sort(function (a, b) {
                if (a.lastName < b.lastName) {
                    return -1;
                }
                if (a.lastName > b.lastName) {
                    return 1;
                }
                return 0;
            });
            showList();
            break;
        case 3:
            employeesList.sort(function (a, b) {
                if (a.phone < b.phone) {
                    return -1;
                }
                if (a.phone > b.phone) {
                    return 1;
                }
                return 0;
            });
            showList();
            break;
        case 4:
            employeesList.sort(function (a, b) {
                if (a.salary < b.salary) {
                    return -1;
                }
                if (a.salary > b.salary) {
                    return 1;
                }
                return 0;
            });
            showList();
            break;
        default:
            break;
    }
    /*if (key) {
        employeesList.sort(function (a, b) {
            if (a[key] < b[key] {
                return -1;
            }
            if (a[key]> b[key]) {
                return 1;
            }
            return 0;
        });
        showList();
    }*/
}