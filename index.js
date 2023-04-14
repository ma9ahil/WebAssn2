function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("application/my-app");

    let el;
    if(data=="varblock"){
        // el = document.createElement("div");
        document.getElementById("drop").innerHTML += `
        <div class="varblock">
            Set
            <input type='text'>
            To
            <input type='text'>
        </div>
        `;
    }
    else{
        // el = document.createElement("div");
        document.getElementById("drop").innerHTML += `
        <div class="forblock">
            for
            <input type='text'>
            =
            <input type='text'>
            do 
            <input type='text'>

        </div>
        `;
    }


    // document.getElementById("drop").appendChild(el);
}

window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const elements = document.getElementsByClassName("draggable");
    // Add the ondragstart event listener
    for(let element of elements) {
        element.addEventListener("dragstart", dragstart_handler);

    }
});




