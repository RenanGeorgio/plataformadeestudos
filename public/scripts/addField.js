document.querySelector("#add-time")
addEventListener('click', cloneField)

function cloneField(){
    const var1 = document.querySelector(".schedule-time").cloneNode(true)
    
    const var2 = var1.querySelectorAll("input")

    var2.forEach(function(field) {
        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(var1)
}