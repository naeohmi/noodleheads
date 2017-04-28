let payLoad = document.querySelector('#payload');

//stubs
let createItem = (e) => {
    e.preventDefault();

    console.log('create a resource')
};

let readAllItems = (e) => {
    e.preventDefault();
    console.log('read all the resources');
    axios.get('https://intense-headland-84262.herokuapp.com/api/tasks/')
        .then(function(res) {
            console.log(res.data.data);
            payLoad.innerHTML = "";
            res.data.data.forEach(function(d, c) {
                payLoad.innerHTML += `<div>${c + 1}. ${d.item} 
        <span id=itemid_${d.id}>❌</span>
        </div>`
            })
        })
        .catch(function(err) {
            console.log(err)
        })
};

let readItem = (e) => {
    e.preventDefault();
    console.log('read one item');
};

let updateItem = (e) => {
    e.preventDefault();
    console.log('update a resource');
};

let deleteItem = (e) => {
    e.preventDefault();
    console.log('delete a resource');

    if (event.target.tagName.toLowerCase() === 'span') {
        let e_id = event.target.id;
        confirm(`Are you sure you want to delete item with the ID ${e_id.split('_')[1]} 
    \n I mean really!
    \n Also, consider using something better than this fugly looking confirm window
    \n Use a library like bootstrap, or some modal library...`);
    }
}

//register event listeners
document.getElementById('create_btn').addEventListener('click', createItem);
document.getElementById('readall_btn').addEventListener('click', readAllItems);
document.getElementById('read_btn').addEventListener('click', readItem);
document.getElementById('update_btn').addEventListener('click', updateItem);
document.getElementById('delete_btn').addEventListener('click', deleteItem);

document.querySelectorAll('#payload') //event delegation, delegate event to the parent 
    .forEach((c) => {
        c.addEventListener('click', deleteItem)
    });