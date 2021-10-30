
//select form
$('#form1').submit((event) => {
    event.preventDefault();

    let u_name = $('#name').val();
    let u_comment = $('#comment').val(); 
    
    //debug variables
    //console.log(u_name, u_comment);

    $.ajax({
        url: 'http://localhost/study/php_ajax/insert.php',
        method: 'POST',
        data: {name: u_name, comment: u_comment},
        dataType: 'json',
    }).done((result) => {
        $('#name').val('');
        $('#comment').val('');
        console.log(result);
        getComments();
    });
});

function getComments() {
    $.ajax({
        url: 'http://localhost/study/php_ajax/select.php',
        method: 'GET',
        dataType: 'json',
    }).done((result) => {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            $('.box_comment').append(`
                <div class="b_comm">
                    <h4>${result[i].name}</h4>
                    <p>${result[i].comment}</p>
                </div>
            `);
        }
    });
}

getComments();