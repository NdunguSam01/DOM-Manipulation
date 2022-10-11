document.addEventListener('DOMContentLoaded',function()
{
    const list=document.querySelector('#movie-list ul');
    const form=document.forms;

    //Deleting a movie
    list.addEventListener('click',(e)=>
    {
        if(e.target.className=='delete')
        {
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
            alert('Movie deleted');
        }
    });

    //Adding a movie
    const addForm=form['new-movie'];
    addForm.addEventListener('submit', function(e)
    {
        e.preventDefault();//cancels event if the event is ccancelled
        
        //Creating a new li element
        const value = addForm.querySelector('input[type="text"]').value;
        const li=document.createElement('li');
        const movieName=document.createElement('span');
        const deleteBtn=document.createElement('span');

        //Setting text content
        movieName.textContent = value;
        deleteBtn.textContent = "Delete";

        //Creating the new classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        //Appending to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
})