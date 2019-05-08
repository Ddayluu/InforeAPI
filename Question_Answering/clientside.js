$(document).ready(function() {
    $("#btn").click(function() {
        var document_input = document.getElementById("DocInput").value
        var question_input = document.getElementById("QuesInput").value
        check = confirm("Are you sure?")
        
        if (check) {
            // Define JSON variable
            var sentObj = {
                context: document_input,
                question: question_input
            };

            // Send to sever a Json object
            const Url = "https://jsonplaceholder.typicode.com/posts/"
            $.post(Url, sentObj, function(data, status){
                console.log(`${data} and status is ${status}`)
            })

            // Received data 
            $.getJSON("https://jsonplaceholder.typicode.com/posts/1", function(result){
                // This is example
                document.getElementById("AnswerOutput").value = result.title
            })            
        }
    })
})

function sendJSON(formatJSON, myURL) {
    $.ajax({
        url: myURL,
        dataType: 'JSON',
        type: 'POST',
        contentType: 'application/json',
        data: formatJSON,
        processData: false,
        success: function(result) {
            console.log(result)
        },
        error: function(errorThrown) {
            console.log(`Some errors occure: ${errorThrown}`)
        }
    })
}
