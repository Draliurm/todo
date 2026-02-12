var arr=[]
function guard(){
    arr.push(document.getElementById("nombre").value)
        document.getElementById("lista").innerHTML=""
    for (let i=0; i<arr.length;i++){
        console.log(arr[i])
        document.getElementById("lista").innerHTML+=arr[i]
    }
        
    arr.push(document.getElementById("fecha").value)
        document.getElementById("lista").innerHTML=""
    for (let i=0; i<arr.length;i++){

        console.log(arr[i])
        document.getElementById("lista").innerHTML+=arr[i]

    }
    console.log(arr)
}
function save(){
    var nombre=(document.getElementById("nombre").value)
    var fecha=(document.getElementById("fecha").value)
    var tarea=(document.getElementById("tarea").value)
    let actividades={
    nombre:nombre,fecha:fecha,estado:tarea};
        arr.push(actividades)
        console.log(arr)
        mostrar()
}
function mostrar(){
    var lista=""
    for (let i=0;i<arr.length;i++){
        lista+=(i+1)+"  "+arr[i].nombre+"  "+arr[i].fecha+" "+arr[i].estado+"<br>"
    }
    document.getElementById("lista").innerHTML=lista
}