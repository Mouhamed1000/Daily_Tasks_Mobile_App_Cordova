window.onload = function () {
    const addButton = document.querySelector('input[value=Ajouter]');
    const reintButton = document.querySelector('input[value=Reintialiser]');
    const taskField = document.getElementById('task');
    const taskList = document.getElementById('taskList');

    const taskList2 = document.getElementById('taskList2');

    addButton.addEventListener ('click', function () 
    {
        const item = document.createElement('li');
        item.innerHTML = taskField.value;
        taskList.append(item);

        $(item).on('swiperight', function () 
        {
            taskList.append(item);
        });

        $(item).on('swipeleft', function ()
        {
            taskList2.append(item);
        });

        //Lorsqu'on clique sur le bouton Ajouter, on appelle la fonction ajouter()
        Ajouter();
    }) ;

    reintButton.addEventListener ('click', function () 
    {   
        //Lorsqu'on clique sur le bouton Reintialiser, on appelle la fonction Reintialiser()
        Reintialiser();
    }) ;

    function Ajouter () 
    {
        $(taskList).listview('refresh');
        taskField.select();
    }

    function Reintialiser ()
    {
        taskList.innerHTML = taskList2.innerHTML = '';
        $(taskList).listview('refresh');
        taskField.select();
    }

}
