var http = require("http");
//TODO - Use Employee Module here --> COMPLETED
const employees = require("./Employee.js");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise --> COMPLETED

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
        return;
    } 
    
    if (req.url === '/') {
        //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>" --> COMPLETED
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Lab Exercise 03</h1>');
        return;
    }

    if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format --> COMPLETED
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employees));
            return;
    }

    if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"] --> COMPLETED
            const employeeNames = employees
                .map(e => `${e.firstName} ${e.lastName}`)
                .sort();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employeeNames));
            return;
    }

    if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 } --> COMPLETED
            const totalSalary = employees.reduce((sum, e) => sum + e.Salary, 0);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ total_salary: totalSalary }));
            return;  
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    })

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})