document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create the new new XMLHttpRequest Object
    const xhr = new XMLHttpRequest();

    // open the connection
    xhr.open('GET', 'data.txt', true);

    // Execution of the ajax call 
    xhr.onload = function (){
        // Ready Status 
        // 0 - Unset 
        // 1 - Opened 
        // 2 - received 
        // 3 - Loading 
        // 4 - Done
        // Status 
        // 200 Correct 
        // 403 Forbidden 
        // 404 Not Found  
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;

        }
    }
    // Send the REquest
    xhr.send();

}