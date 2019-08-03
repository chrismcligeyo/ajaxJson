//load single customer

document.querySelector("#button1").addEventListener('click', loadCustomer);


//load single customer
function loadCustomer(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            const customer =JSON.parse(this.responseText);// we use parse because json file is in string though it looks like an object. you can not
            const output = `
            
            <ul>
            
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
           <li>Company: ${customer.company}</li>
           <li>Phone: ${customer.phone}</li>
            
            </ul>
            `;

            //display output in browser

            document.querySelector("#customer").innerHTML = output;




        }
    }

    xhr.send();
}

//load multiple customers
document.querySelector("#button2").addEventListener('click', loadCustomers);


//load multiple customers
function loadCustomers(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){

        if(this.status === 200){
            //console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output = '';

            //we loop through customers in this situation because it is an array
            customers.forEach(function(customer) {
                output += `
                
                <ul>
                
               <li>ID: ${customers.id}</li>
            <li>Name: ${customers.name}</li>
           <li>Company: ${customers.company}</li>
           <li>Phone: ${customers.phone}</li>
                
                
                </ul>
                
                
                
                `;

            });
            document.getElementById('customers').innerHTML = output;

}
    }

    xhr.send();

}