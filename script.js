document.getElementById('getText').addEventListener
('click', getText);

// function getText(){
//     fetch('sample.txt')
//     .then(function(res){
//         return res.text();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

function getText(){
    fetch('sample.txt')
    .then((res) => {
        return res.text();
    })
    .then((data)=>{
        document.getElementById('output').innerHTML = data;
    })
    .catch((err)=>{
        console.log(err);
    })
}