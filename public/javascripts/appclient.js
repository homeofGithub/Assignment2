/*
 File Name: appclient.css
 Student ID: 300952167
 Name: Yi Chen
 Data: Oct 07, 2022 */

 console.log("it goes to the client-side.");

if(getTitle == "Inventory List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}