

const index = (function(){
    $('#js-form').on('submit', e => {
        e.preventDefault();
        const name = $('#name-entry').val();
        console.log(name);
        const results = `It's so nice to meet you, ${name}!`;
        $('.results').html(results);
    });
}());