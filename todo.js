document.addEventListener("DOMContentLoaded", function() {
    const tdform = document.getElementById('todoform');
    const ul = document.getElementById("firstul");
    
    tdform.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(event);

        let butt = document.createElement('button');
        butt.innerText = 'completed';
        butt.style.marginLeft = '5px'

        const li = document.createElement('li');
        li.style.marginRight = '5px';
        li.innerText = document.getElementById('todo').value;
        firstul.appendChild(li);
        li.appendChild(butt);
        tdform.reset();
       
    })
       
        

 
    firstul.addEventListener('click', function(event) {
        console.log(event);
        const li = document.querySelector('li');
        const tar = event.target.tagName.toLowerCase()
        if(tar === 'button') {
            event.target.parentElement.remove();
        } else if (tar === 'li') {
            event.target.style.textDecoration = 'line-through'
        }
    })

    localStorage.setItem('tdform', JSON.stringify(tdform))
})