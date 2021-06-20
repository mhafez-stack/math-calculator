function add() {
    let x = document.getElementById('num1').value
    let y = document.getElementById('num2').value
    let results = Number(x) + Number(y)
    if(results != ""){
        document.getElementById('answer').innerHTML = results
        document.getElementById('success').innerHTML = "<h3>Congrats</h3><br><img src = 'https://media.tenor.com/images/021a425021d63b351b10520c8e8bcbca/tenor.gif' alt='success' />"

    }
}


