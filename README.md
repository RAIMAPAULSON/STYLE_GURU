------JAVASCRIPT-Programming concepts------
----------------------
1.node JS- provide run time environment and js library
2.Basic concepts in JS
    -Display content : console.log(content)
    -Data types in JS : typeof
         -string
         -number
         -boolean
         -object
    -Identifiers : set of rules to set up name for variables (start with character ie, capital or small letter ,there should not be space b/w identifiers)
    -Variable: use to store Data
       -using var keyword
           syntax: var variableName / var variable_name = value
       -using const keyword
           syntax: const variable_name = value
       -using let keyword
    -Difference b/w different variable
    ---------------var---(disadv: can store diffr. type of data ,which can be a problem)                                                                           
    -use var keyword                                                                              
    -reassign with any type of Data
    -Global scope
    -hoisted with undefined(hoisted meaning we can use that data before we create that variable)

     --------------const-------
       -use const keyword
       -block scope (we cannot update) 
       -cannot reassign its value
       -hoisted without value

    -------------let--------------
    -use let keyword
    -can reassign its value
    -block scope
    -hoisted without value

    -Joining different type of datas in js
       -commas
       -using + operator (concatenation)
       -using ` (template literal) (important one)
    -Operators in JS
       -Assignment operators : variable_name = value
       -Arithmetic operators : + - * / % **
       -Relational operators : > >= < <= == != === (answer will be boolean that is true or false)
       -Logical operators : && || ! (in order to combine relational operators)
        --------AND--------
           T && T = T
           T && F = F
           F && T = F
           F && F = F
        --------OR---------
           T || T = T
           T || F = T
           F || T = T 
           F || F = F
        ------NOT-------
           !T = F
           !F = T
        -Increment/decrement operator: ++ -- (part of arithmetic operator)
        -short hand operators: += -=
        -ternary operators: ?:(alternative for if else)(condition? condition become true:condition become false)
        -Truthy operator(only if is there)(condition && statements when condition become true)
        -Spread operator... : used to expand an iterating variable to a single variable
        -Rest operator... : used to combine rest of the data to a single array
    -Conditional statements
       -if statements
           synatx: if(condition){if body: executes when condition satisfy}
       -if-else statements
            syntax: if(condition){if body: executes when condition satisfy} else { executes when condition false}
       -else-if ladders
       -switch cases
   -Looping statements:repeating same tasks multiple times
       -while Loop 
          syntax: 
             1.initialise a variable with a value
             2.while(condition should include initialised variable){
                  while body executes when condition is true
               3. Change the value of variable that used in the condition
             }


       -for loop
          syntax: for(initialise a variable with a value;condition should include initialised variable;
          Change the value of variable that used in the condition){
            for body executes when condition is true
          }
          -break statements
          -continue statements
      -nested loop: a loop inside another loop
   -Function : used to perform specific tasks during the code
      -2 parts
         -function definition: defining the task to be performed
             syntax: function function-name(parameters used to perform task){
               defining task in function body (block scope which means cannot access outside)
             }
         -Function call : to execute a function
             syntax: function-name(arguments to be passed to the function definition)
         -return statements:return data from function definition to function call
         -Types of function
           -Arrow function:alternative for function definition, function-name = (parameters used to perform task)=>{
             }
             -is not hoisted
           -Predefined function: console.log(), Math.floor()
           -Callback function: function definition inside another function call, completes its execution only after completion of the function
           inside it
           -anonymous function: self executing function,nameless function
           -Nested function: function definition inside another function definition
               -closure property: nested fn can access parent variable ,global variable and its own variable
           -Recursive function: calling a function inside its own definition
   -Array: used to hold multiples values in a single variable
         -to access each value from an array use it's index,array-name[index-number]
         -total count of items in array : length
         -type of array : object
         -to access array items one by one 
             -using normal for loop
             -using for - of loop : for(let variable-name of array-name){} return array items
             -using for - in loop : for(let variable-name in array-name){} return array index
         -Methods: array-name.method()
             -push(item) : used to insert data at the end of an existing array
             -unshift(item) : used to insert data at the first of an existing array
             -pop(): used to remove data at the end of an existing array
             -shift() : used to remove data at the first of an existing array
             -sort(comparefn):used to sort array
                 -comparefn: (num1,num2)=>num1-num2(ascending order)
                           : (num1,num2)=>num2-num1(descending order)
             -forEach(callbackfn:(value,index,array)=>void): alternative to for of loop
             -filter(callbackfn) : return an array with items satisfying the condition from an existing array
             -find(callbackfn) : return an items satisfying the condition from an existing array
             -map(callbackfn) : return a new array with values after applying a mapping function to existing array
             -reduce(callbackfn) : return a single value which is either smallest/largest/ total sum from an existing array after applying reduce fn
                   -if we are using arithmetic fn in reduce array should only contain numbers
             -reduceRight(callbackfn) : return a single value (either smallest/largest) which is the first item from an existing array
                                        after applying reduce fn
             -some(callbackfn) : return true/false based on condition applied to all items in given array
             -flat(depth) : return array with corresponding depth as dimension,to convert to one dimension give depth as 'Infinity'
             -includes(key) : return boolean based on the key present in the given array
             -indexOf(item) : return index number corresponding to the item
             -splice(starting index,delete count) : used to delete items from an array and return an array with removed item
             -join(seperator) : return a string with array value separated using the given seperator
    -String : 
          -Methods
               -substring() : Returns substring at the specified location within a String Object
               -toLowerCase()
               -toUpperCase()
               -startsWith()
               -endsWith()
               -trim()
               -includes()
               -split()
               -slice()
               -eval(string-expression) :used to evaluate an expression as a string
    -Object : Data storing as a {key:value} pair
              -use key : To access value from an object
                   syntax : object-name['key'] / object-name.key
              -using in operator we can check a key is in object,return a boolean
                   syntax : "key" in object-name  
              -Insert value to an existing object
                   object-name["key] = value / object-name.key = value
              -Object.values(object-name) : return an array of value of the given object
              -Object.keys(object-name) : return an array of keys of the given object
              -Object.assign(target-object,source) : used to insert data in an existing objects
              -Methods
                  -hasOwnProperty(key) : we can check a key is in object , return a boolean
    -Access specifiers : used to specify the access of a variable/function
           -public
           -private
           -protected
    -Object Oriented Programming(OOPs)
              -Object : real time entity
              -Class: blueprint of object
              -Reference: used to refer property to its class
              -constructor() : method used to initialise class property
              -Features of OOPs
                 -Inheritance : use to get data from one class to another
                     -Classical inheritance : use extends keyword
                     -Prototype Inheritance : use __proto__
                 -Polymorphism : to implement polymorphism in js use REST operator(...)
                 -Abstraction : hiding the important data from user
                 -Encapsulation : data inside another data like class
-Try-Catch-finally Block : used to handle run time error
------------------JAVASCRIPT -Front end concepts------------------------
-used to provide behaviour to the webpage
-Ways to applying JS in HTML
      -Internal JS : use script tag to provide js code in HTML
      -External JS : link external js file with HTML using script tag
-DOM: Document object  Model for a webpage 
      -A tree structure corresponding to a webpage,there will be a single root/node (html tag) which is made up of js object
      -JS can access webpage/HTML elements via DOM using 'document' object
-DOM Methods : Selecting HTML elements to js code
      -using tag name: document.getElementsByTagName('tag-name')
      -using class name : document.getElementsByClass('class-name')
      -using id: document.getElementById('id-name')
      -using querySelector : document.querySelector('tag/#id/.class-name')
      -using querySelectorAll : document.querySelectorAll('tag/#id/.class-name')
-Event : triggered by user actions 
      -Mouse Related Events : click,move,drag...
      -Keyboard Related Events : keypressdown,keyup
      -Text based Events
-Access / update content of a tag : 
      -innerHTML
      -innerText
-Permanent data storage in Browser:
      -Using Local storage
      -Using Session storage
      -Methods : both key and value must be string
          -setItem(key,value) : used to store data in local/session storage
          -getItem(key) : used to get data from local/session storage
          -removeItem(key) : used to delete data from local/session storage
-API : Application Programming Interface - used to communicate Application in internet
      -URL : Uniform Resource Locator
           -ex : https://jsonplaceholder.typicode.com/users/1
           baseurl: https://jsonplaceholder.typicode.com/
      -URI-Uniform Resource Identifier ex: users
      -Path parameters : ex:1
      -Query parameter: values followed with ? in url
           ex: https://www.google.com/search?q=jsonplaceholder&rlz=1C1VDKB_enIN1049IN1049&oq=jsonpla&gs_lcrp=EgZjaHJvbWUqDwgBEAAYQxixAxiABBiKBTIGCAAQRRg5Mg8IARAAGEMYsQMYgAQYigUyDQgCEAAYgwEYsQMYgAQyEAgDEAAYgwEYsQMYgAQYigUyBwgEEAAYgAQyDQgFEAAYgwEYsQMYgAQyBwgGEAAYgAQyBggHEAUYQNIBCDM5MDlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
      -Body parameter : 
      -Types of API Architectural
           -REST API : HTTP, JSON
           -SOAP API : HTTP, XML
           -GRAPHL
      -JSON : JAVASCRIPT Object Notation
         -{"key":value}
         -key should be string
      -HTTP(Hyper Text Transfer Protocol)
         -HTTP Requests
               -GET(to get a data from server to client)
               -POST(to store/add data to server from client)
               -PUT(to edit/update existing data to server from client)
               -DELETE(to remove a data from server)
         -HTTP Response Codes : to identify status of client requests by Browser.Status codes are:
               -1xx : Informational
               -2xx : Success
               -3xx : Redirection
               -4xx : Client error
               -5xx : Server error
         -Resolving Function call in JS 
         -Synchronous Function :without delay it give output
         -Asynchronous functions 
         -JS use single Call stack(single threaded programming) to monitor it using event loop
            -Asynchronous
                 -Callback hold in callback queue
                 -API call hold in microtask queue(priority queue)
                 -Resolving Asynchronous functions
                     -if we use call back to resolve asynchronous fn it may lead 'Callback hell: nesting of callback fn'scenario
                     -Promise : avoid callback hell
                        -has 2 states:
                             -Resolved state : use then method to get the Response
                             -Reject state : use catch method to get the reason to fail the function call
                             -Pending state : waiting duration to get response for asynchronous fn call
                        -Async-Await keyword : To resolve promise
                             -'async' is used in a function to indicate its asynchronous
                             -use 'await' keyword infront of async function call,to wait till its completed
                             -only resolved state will get after await to completes the async function call
                             -to get reject state use try-catch block
            -API Call using JS
                    -using XMLHTTPRequest :AJAX (asynchronous JS & XML)
                    -fetch() : returns promise
                    -axios library : return promise

-------------------------------------------------------------------------------------
----------------------REACT -Advanced Front end technology-------------------------------------
-------------------------------------------------------------------------------------
-Meta introduced React
-Basic concepts
   -React app is a collection of different library
   -Components : Part of user Interface
   -React App is a collection of Components
         -*Components are arranged in a tree structure
         -There will be a root component in react app which is commonly known as 'App'
   -React is used to create Single Page Application
   -Pure functions : which does not cause side effects,used to create functional component
   -Declarative Approach
   -*Virtual DOM : lightweight memory representation of real DOM
      -Reconciliation :
   -*JSX(JAVASCRIPT XML) : (language used to write code in React) - used to Display content in Browser
      - ex: JSX elements: const heading = <h1> Heading1 </h1>
      -Rules for using JSX 
         -Every JSX elements must be inside a single parent tag
         -Every tag must have a closing tag.ex: <h1>heading</h1> , <br/>(self closing tags)
         -Parent tag can be any container tag/ simply react fragment (<>....</>)
         -Attribute 'class' is 'className' in JSX
         -JSX using camel case
         -Instead of Attribute 'for' use 'htmlFor' in JSX
         -use {js-expression} : to provide js expression in JSX
    -React App Creation 
       -CRA(using create-react-app command)
       -Vite : building tool for web projects
          -installing Globally : npm i -g create-vite
          -React app using vite : npm create vite@latest react-app -- --template react
    -React App File & Folder structure
        -package.json : npm configuration file for the projects
        -package-lock.json : contains version history all packages installed in the projects
        -.gitignore file : contains files/folders name which is ignored while adding to git
    -index.html file : entry page to react app
    -node-modules : used to hold copies of dependent libraries of react project(we can install using command : npm install)
    -public folder : react project can access data stored in public folder as globally 
    -src folder : define react app here
        -assets folder : used to hold media files used in react app
        -main.jsx file : created ReactDOM with parent node as div with id as 'root', and render the parent (App)
         component inside the node
    -to run react app : use command 'npm run dev'
    -Babel library : transpile JSX code to simple react function which is understood by browser
-*High performance
-*Data Binding/sharing : One way data binding (from parent to child)
-*Components : part of user Interface,independent and reusable code
       -General rules for creating components
            -create a js/jsx file,file name must start with capital letter
       -Different types Components
            -Class based components : use class to create component it can inherit react component
                 -Statefull component: because it can create state
            -Functional based Components : use function to create component,return jsx code
                 -Stateless component: it cannot create state
       -Life cycle methods of React component
            -Mounting Phase : Putting JSX to DOM
                 -constructor()
                 -getDerivedStateFromProps()--(whether they are getting anything from parent)
                 -render()
                 -componentDidMount()
            -Updating Phase : when component is Updating
                 -getDerivedStateFromProps()
                 -shouldComponentUpdate()
                 -render()
                 -getSnapshotBeforeUpdate()
                 -componentDidUpdate()
            -Unmounting Phase : Removing component from DOM
                 -componentWillUnmount()
-Difference between functional and class based components
--------------------------------------------------------------------------------------------------------------
      Functional Component                                         Class Component
--------------------------------------------------------------------------------------------------------------- 
   1.JS pure function to accept props                     1.is class extended from react component it render
     and returns JSX elements                               function return JSX element
   2.it executes from top to bottom,once                  2.Component alive depending on different life 
     it returns JSX,then it cannot be alive                 cycle
   3.Stateless component                                  3.Statefull component
   4.Hooks are used                                       4.Hooks are not used
   5.Lifecycle method is not available                    5.can use Life cycle method in component
   6.No need render function                              6.It requires render to return JSX
   7.No need of constructor                               7.Constructor used to initialise state
-Props Object : Property of a component, using Props a component can get shared object from its parent,
                props will be get as an 'argument' of functional component
-Styling in React component - using Class
      -Using Inline CSS : style={{property:value}}
      -Using External CSS : using external css file,import css file to component file
      -Using CSS Module File : file with extension as .module.css is known as CSS Module file.
-React Events Binding
      -Binding a function without argument : event={function-name}
      -Binding a function argument : event={()=>function-name(arg)} 
      -Binding a function argument as event : event={(e)=>function-name(e)}
-Conditional rendering - Based on a condition we can control the jsx element in browser
      -if statement : use opeartor &&(it is truthy operator)
      -if-else statement : use operator ?:
-react State : is an object used to store data / information regarding component,whenever state changes,the
               component re-renders
               - use setState(value) : to update state ,which is method
-React Hooks : is a predefined function used to provide react component features to functional components
      -Hooks are function with function name starts with 'use' keyword
      -to use a hook in functional component , we must call the hook
      -Rule for calling hooks in functional component
          -Import hook from react,in component
          -Hooks can called at the top level of the component
          -Hooks cannot be Conditional
     -Types of hooks
          -Predefined hooks
             -useState(initial-value): to help functional component to create state
               syntax: const [state-name,state updating function name] = useState(initial-value)
             -useEffect(callback function,dependency) : used to provide side effects to your component
                 -function : used define side effects applied to component
                 -dependency : based on dependency,useEffect will get called,side effect will applied to the component
                      -no dependency : useEffect hook will call all time in component
                      -[] : useEffect hook will call only at the time in component Creation
                      -[data] : useEffect hook will call at the time in component Creation as well as data changes
             -useParams() : will return path related informations of a component
          -Customized hooks :
             -Create a function with name starts with 'use' keyword
     -Handling List/Array using React 
         -using 'map' method
         -to uniquely identify each item in a list use key attribute in component
      -Styling Framework in REACT
         -Material UI : npm install @mui/material @emotion/react @emotion/styled
         -React Bootstrap: npm install react-bootstrap bootstrap,we have to add bootstrap theme for the proper work of bootstrap,
         bootswatch.com will provide the theme,choose a theme and download its bootstrap.min.css file into project src folder,
         import bootstrap.min.css into main.jsx file
     -React Forms 
         -Controlled Components :  data changes in the form is handled by the component by storing its state using change event
         -Uncontrolled Components : form handled by real DOM
         -To submit form, to prevent it from reloading use preventDefault() method component
     -Set up path for Component in React
         -install react-router-dom : npm i react-router-dom
         -React app must render inside 'BrowserRouter'
         -Components needs to set up path must be inside Routes component of react router dom in App.jsx
         -using Route component define each component path
         -Link component used to redirect form one page to another within an application
    -Higher Order Component(HOC) : a component is argument / props to another component
    -react-toastify library for notification in react-npm i react-toastify
    -API Call in React
        -Axios library: npm i axios
        -Create a folder for services
    -To create the build for the production of your react application use command: npm run build
    --------------------------------------------------------------------------------------
                 JSON SERVER
    --------------------------------------------------------------------------------------
    1.Create a folder to hold json file
    2.Create package.json file inside the folder : npm init -y
    3.Create db.json file inside the folder and resources as key to the json file
    4.To run json file install json-server: npm i json-server / npm i json-server@0.17.4
    5.To run json file in localhost use : npx json-server db.json/node index.js
----------------------------------------------------------------------------------------
                DEPLOYING A JSON FILE using NODE JS
----------------------------------------------------------------------------------------
1.Create index.js file in server folder
2.Update script in package.json file as "start : "node index.js"
3.create .gitignore file and add 'node-modules' folder
4.Define json-server to run json file in index.js
    -import json-server
    -create server to run json file using create() method of jsonServer
    -create middleware stored by JSON Server.
    -set up route for json file in server
    -set up port for running server app
    -use middleware,route in server app
    -listen the app in given port to resolve client request
5.To run the app,use 'node index.js'


-----------------------------------------------------------------------------------------
                REDUX - STATE MANAGEMENT TOOL
-----------------------------------------------------------------------------------------
1.To avoid props drilling to manage state in a react app
2.Libraries needed to implement REDUX
  -React-Redux : official react bindings for redux
  -Redux Toolkit : toolset for efficient redux development
  -install libraries: npm install @reduxjs/toolkit react-redux
3.REDUX FEATURES
  -Store: using 'configureStore()' to create redux store,use 'Provider' to make the store available for react app
  -createSlice():used to combine action and reducer together,it returns actions and reducer to create slice we have to pass configuration with
  following data : name,initialState,reducers where we will define action to update the state
      -when component dispatch action with argument to update the state with argument then action function will get from its 'payload'
  -Action: define logic to update the state
  -Reducer: used to hold updated state to store
  -Redux DevTools Extension : used for debugging applications's state changes.
  -useSelector hook : use state from store to component,usage : useSelector(state=>state.reducer-name)
  -useDispatch hook: used to execute action from component
  -createAsyncThunk() : A function that accepts a Redux action type string and a callback function that should return a promise.
      -returns a standard Redux thunk action creator,pending,fulfilled and rejected cases
      -its output returns extraReducer, where we can add cases using builder class
-ExtraReducer : it can resolve a promise in different cases,we can add cases using Builder object
-----------------------------------------------------------------------------------------------------------------------
                         MONGODB -DATABASE
-----------------------------------------------------------------------------------------------------------------------
1.Database used to store and manage data permanently
2.                SQL                                                                    MONGODB
            -----------------                                                     --------------------------
    -Relational/SQL DBMS                                                      -Document oriented/NoSQL DB
    -store data in table with row and column                                  -Store data as collection of JSON documents
    -uses fixed schema                                                        -uses dynamic schema
    -Optimisied for complex joins and transaction                             -Optimised for scalability and performance
    -support rich set of data types                                           -Limited set of data types
    -Declarative query language                                               -Expressive query language based on JSON
    -ACID properties (Atomicity,Consistency,                                  -NoSQL based on CAP(Consitency,Availability,
     Isolation,Durability)                                                     Partition Tolerance)
    -uses in traditional business application                                 -used in big data & real time application
3.Collection name must start with small letter and should be plural
4.Mongodb will create a unique id for all new document,which is a hexadecimal object id is stored in key _id
5.Display all db in mongodb : show databases
6.switched to particular db: use db-name
7.Display all collections in db : show collections
8.CRUD Operations
  -Read all documents stored in a collection : find()
  -Read a document stored in a collection which satisfy a condition : findOne({key:value}),
   if condition satisfies then it return 'entire document' else it return 'null'
   -Insert a data in mongodb collection : insertOne({key:value})
   -Insert multiple data in mongodb collection : insertMany([{key:value},{key:value},...])
   -Display total documents count in a collection: countDocuments()
   -To limit count of document read from using limit(number)
   -To skip data while reading the documents use skip(number)
   -To sort data use sort(condition)(eg:sort(uname:1))
   <!-- 1 is for ascending and 2 is for descending -->
   -$gt/$gte/$lt/$lte : used to perform querying while reading documents
   -$in/$nin : used to check documents are included or not
   -$exists
   -$and/$or
   -$expr : used to compare different fields in a document
   -To update document : use updateOne/updateMany ()
         -$set to assign values,
         -$inc to increment values
         -$unset to remove a key from a documents
         -$push to insert data to an array in a document
         -$pull to remove data from an array in a document
    -To remove documents: deleteOne/deleteMany()
9.Aggregation: used to join multiple collection to get common result
    -$lookup: similar as left-outer join in sql, adds a new array field to each input document
    -{
     $lookup:
       {
         from: <collection to join>,
         localField: <field from the input documents>,
         foreignField: <field from the documents of the "from" collection>,
         as: <output array field>
       }
}
10.Mongodb Atlas : Cloud version of Mongodb
   -Register
----------------------------------------------------------------------------------------
                  NODE JS - SERVER / BACKEND
----------------------------------------------------------------------------------------
1.Run time environment + JS Library for JS
2.Features
    -Extreamly fast
    -Asynchronous
    -Single threaded with event loop
    -Highly scalable
    -Open source
3.Node JS Global Objects
    -It can be accessed anywhere from node js app without exporting or importing
    -ex:console.log(),setTimeout()....
4.Node js Module System : A file is considered as module in node to access data from one file it has to export from there
and before using it in another file it has to import
  -to import module : require('module/path') method
  -to export module : module.exports / exports
  -Builtin Module in Nodejs
      -fs : file system : handling file related events
      -http : create web server
      -https : create web server
      -events : work with EventEmitter
      -Crypto : providing tool like hashing ,encrytion etc..
      -process : basically used to provide currently running process in the node js app
         -Environmental Variable: used to hold configuration / confidential data regarding the project, to access 
         Environmental Variable through out app use 'process.env.variable-name'
5.Node js Packages:
    -used to resolve common problems
    -we have to install via npm
    -it add package.json file,package-lock.json,node_modules
6.Backend concepts:
    -Client server Architecture
    -REST API: http requests, data in json
    -CRUD : Create(post),Read(get),Update(put),Delete(delete)
    -CORS: Cross Origin Resource Sharing Protocol must be enabled in server
7.Node js Working
    -Event Queue
    -Event Loop
    -Thread Pool(blocking operation)
        -communicate with external resources like db,file system etc..
    -I/O Polling (non blocking operation)
8.Node JS
   -Server side environment
   -written C,C++ languages
   -building fast & scalable server side app
   -generate db queries

-----------------------------------------------------------------------------------------------------
                          EXPRESS JS - FRAMEWORK OF NODE JS
-----------------------------------------------------------------------------------------------------
1.used in Client server Architecture as a web server
2.Steps to create an express server
      -Create a server folder
      -inside folder create package.json file: 'npm init -y'
      -update package.json,script key as "start": "node index.js" instead of test
      -install packages for creating express web server
            -express(used to create server): npm i express
            -cors (used to enable cors): npm i cors
            -dotenv (used to load .env file content to process environmental variable) : npm i dotenv
      -create .env file (to store environmental variable of a project)
      -create .gitignore file (used to avoid files/folders uploading to git) where you have to add node_modules, .env
      -index.js file to define express server
      -import dotenv,cors,express
      -create express server
      -use cors in express server
      -use json parser in express server
      -create port for server app
      -start to listen server app for client
      -resolve get request to server using express
      -Run server app using the command node index.js
      -npm i -g nodemon(autocompilation)
  -Create routes in server
      -create a folder
          -create router.js file inside the folder
              -import express
              -create an object of Router class of express
              -router object is capable of defining route for the app
              -export router from the file
              -import router in index.js file
              -user router in express server app
  -Create controller folder to define logic to solve client request
         -create a folder
         -create a js file to define logic to solve client request
         -import a model that should communicate with the controller
         -define logic to resolve client request and send response to client
         -import controller in router for each request
  -Create models to define schema and model for mongodb collection using mongoose
        -create a folder
        -create a js file to define schema and model
        -import mongoose
        -create schema object to define structure of the document
        -create model
        -export model
  -Create DB connection folder
        -create js file to define db connection
            -import mongoose
            -get connection string  
            -use mongoose to connect db with node js
            -import index.js db file    
  -create a middleware folder
       -create js file to verify jwt token
           -import jsonwebtoken
           -create middleware function to define logic to verify token
           -export middleware

-------------------------------------------------------------------------------------------
                  MONGOOSE - OBJECT DATA MODEL(ODM) FOR NODE JS
-------------------------------------------------------------------------------------------
1.Install mongoose : npm i mangoose
2.Create schema : structure of the document that we want to store in a collection
     -create object of schema class
3.Model :  copy of collection in mongodb
     -Create a model using model method in mongoose
     -export model
     -use middleware in router
          -as router.httpRequest(path,middleware,controller)

------------------------------------------------------------------------------------------
                        JSONWEBTOKEN - For authentication system
------------------------------------------------------------------------------------------
1.install jsonwebtoken in server : npm i jsonwebtoken
2.Used to securely transfer information over the web(between two parties)
3.JWT to sign the token and send it back to the user on a successful login
4.Token creation using JWT : use sign(payload,password)
   -payload : is the data we want to store inside the token
   -password : can be any data that has to define .env file
5.Token verification : use verify(token,password)
   

-------------------------------------------------------------------------------------------
                             MIDDLEWARE-For connecting app effectively
-------------------------------------------------------------------------------------------
1.Is a function with 3 arguments (req,res,next)
     -req : request object from client
     -res : response object from server
     -next : is a method which control the request
2.can access/control request response cycle
3.2 types of middleware
    -Application specific middleware : will be active for all request coming to the server
       -ex : express.json()
    -Router specific middleware : it will be active in a particular router

-------------------------------------------------------------------------------------------
                             MULTER - Middleware used to resolve multipart/formData
-------------------------------------------------------------------------------------------
1.Install multer in server : npm i multer
2.Multer adds a 'body' object and a 'file' or 'files' object to the 'request' object.
    -The body object contains the values of the text fields of the form
    -the file or files object contains the files uploaded via the form.
3.It can handle defining the storage of uploading the file in a request
    -create a 'uploads' folder in server to hold all uploading files from client
    -define a middleware to apply multer for storing/managing uploading file using multer
         -create a js file in middleware folder
         -import multer inside js file
         -define storage for uploading file using multer
         -export multer
         -use multer as router specific middleware

----------------------------------------------------------------------------------------------------------
                Typescript - Javascript with syntax for types
----------------------------------------------------------------------------------------------------------
1.Typescript - superset of javascript which adds static typing
     -syntax : variable_name:type = value , variable_name = value
     -type is 'any' in ts / 'unknown'
2.Typescript compiler - Typescript is transpiled into javascript using a compiler

----------------------------------------------------------------------------------------------------------
                Angular - Typescript Framework (Front end Tchnology)
----------------------------------------------------------------------------------------------------------
1.developed by 'Google' for building dynamic web applications
2.create effecient and interactive user interfaces
3.Setting up an Angular
       -Angular Command Line Interface(CLI) : npm install -g @angular/cli@16.1.7
       -Angular CLI version : ng v(run in command prompt)
4.Create Angular Project : ng new project-name
5.File & folder structure of Angular Project:
      -.editorConfig file :
      -.gitignore file
      -angular.json : angular configuration file for this project
      -package.json : npm configuration file
      -package-lock.json :
      -tsconfig.app.json / tsconfig.json / tsconfig.spec.json
      -node_modules : used to hold copies of installed packages in this project
      -src : source folder
           -style.css : global style apply
           -main.ts : used to define which module should be loaded first
6.Run Angular Application : ng serve /ng s -o ,visit localhost:4200/
7.Basic concepts in Angular
    -Module : is a container for different parts of an app,it consists of components
      -command for creating lazy loaded module with routing : ng g m module-name --route module-name --module app.module
    -Components : create user interfaces
       -consists of html file,css file and ts file
             -ts file : component file,it should be a 'class'
             -selector : used to select a component in any other components html page, use 
                         <selector></selector>
             -templateUrl : html page
       -command to create component : ng g c component-name
    -Decarators : used to define metadata ( a data inside another data), it starts with '@' symbol
    -Angular routes : using module-routing-module.ts file,define component path in routes array as an object
         -syntax : {path: 'component-path',component:component-name}
         -router-outlet selector helps to change the html view of root component by user requested route,use router-outlet
          selector in root component
         -routerLink : used to redirect from one page to another without reloading the page, it is used instead of 'href' in a tag
         -Router class : define how to redirect from one component to another ts file,use navigateByURL('path')
    -Data binding : data sharing within a component(html with ts file)
        -One way binding : At a time data shared only in one direction
              -ts(component) file to html(view) file
                   -string interpolation : {{component-property}} use in html
                   -property binding : [attribute] = "component-property"
              -html(view) to ts(component) file
                   -Event binding : (event-name) = "function-name()"
                   -Event binding  using $event : (event-name)="function-name($event)"
                   -Event binding using template referance variable (#variable-name : which gives you whole information regarding
                   that tag) : (event-name)="function-name(template-Reference...)"
        -Two way binding : at a time data shared in both direction
            -Different ways to create form in angular
                  -Template driven forms : first we will design html after bind it with ts file
                       -ngModel directive : used to get details from an input tag
                       -ngForm directive : used to manage form tag
                       -two way binding : [(ngModel)]="component-property"
                           -import 'FormsModule' in to module file
                       -To apply validation,can directly add validators into the html elements
                  -Model driven forms : first create model for the form in ts file and bind it with html
                      -ex for Model Driven form is 'Reactive Form'
                           -Reactive forms includes
                                -Form Group : similar to model, to create it we need FormBuilder class
                                -Form Array : values that stored in form group
                                   -To apply validation,use Validator class to get in built validation
                                    and apply to the form a
                                -Form Control : to link html input tag with form group
                            -import 'ReactiveFormsModule' in to module file
            -Dependency Injection : Dependent class can be used in another class property.
               -syntax : constructor( access-specifier component-property : Dependent-class-name){}
            -Angular Services : used to share common logic among different components in an app
               -create services : ng g s services-folder-name/service-name
            -Angular Directive : classes that add additional behavior to elements in your angular application.
                -Component directive : used to display component in DOM/browser,selector of a component is used to display
                                       it in browser
                -Structural directive : used to manage(add/remove elements) structure of a DOM
                     -*ngIf : based on a condition we can add /remove elements from DOM
                          syntax: *ngIf="condition"
                     -*ngFor : can add several elements to dom based on array(similar to forof loop)
                          syntax : *ngFor = "let variable_name of array-name"
                     -*ngSwitch : 
                -Attribute directive : used to add style to elements based on properties
                   -predefined attribute directive : ngClass directive(used to provide class of style to html elements)
            -Resolving asynchronous function in Angular : RxJS(Reactive Extension for JS)
                -Observable : to resolve async functions in angular(at a time multiple async functions can be resolved)(in react we used promise and also callback is there)
                   -resolve state : observers are used in Observable
                           -subscribe observers can be an object with key holding success case (next key) as well as 
                            failed case (error key) response,also it can be a callback fn,its argument will hold response
                            of the fn call
                   -reject case : catch method
                -Resolving API call : 'HttpClient' class methods is capable of returning observable(in react we used axios,fetch)
                     -To make api call using HttpClient,import 'HttpClientModule' in module file
                -Angular life cycle methods : these methods are defined in Interfaces,to use life cycle methods in component,it has
                to implement them
                    -ngOnChanges()
                    -ngOnInit()
                    -ngDoCheck()
                    -ngAfterContentInit()
                    -ngAfterContentChecked()
                    -ngAfterViewInit()
                    -ngAfterViewChceked()
                    -ngOnDestroy()
                -ActivatedRoute Class : used to provide details regarding route associated with a component
                -Pipes: Use pipes to transform strings, currency amounts, dates, and other data for display.
                        Pipes are simple functions to use in templates to accept an input value and return a
                        transformed value.
                    -syntax : use pipe in template - transform-value | pipe-name [:options]
                    -generate user-defined pipes : ng g p pipe-folder/pipe-name
                -Download as pdf :  npm install jspdf jspdf-autotable
                -Pagination in angular : npm i ngx-pagination

                -BehaviorSubject : it immediately receives the current value where we used the subject in our app,
                requires an initial value upon instantiation.to access value from a BehaviorSubject it has to subscribe.
                next method in BehaviorSubject is used to assign a value to BehaviorSubject,to create BehaviorSubject we
                have to create object for BehaviorSubject class