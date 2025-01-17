window.onload = function () {
    const addButton = document.querySelector('input[value=Ajouter]');
    const reintButton = document.querySelector('input[value=Reintialiser]');
    const taskField = document.getElementById('task');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener ('click', function () 
    {
        const item = document.createElement('li');
        item.innerHTML = taskField.value;
        taskList.append(item);

        $(item).on('swiperight', function () 
        {
            $(item).toggleClass('termine');
        });

        $(item).on('swipeleft', function ()
        {
            $(item).hide('slow', function ()
            {
                $(item).remove('termine');
            });
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
        taskList.innerHTML = '';
        $(taskList).listview('refresh');
        taskField.select();
    }

}
