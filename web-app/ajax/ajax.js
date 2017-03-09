var server = 'https://jsonplaceholder.typicode.com';

$('#ajax-requestButton').click(function (){
    $.ajax({
        url: server + '/posts/1',
        method: 'GET'
    }).then(function(data) {
        $('#ajax-result').text(JSON.stringify(data));
        console.log('called');
    });
});
