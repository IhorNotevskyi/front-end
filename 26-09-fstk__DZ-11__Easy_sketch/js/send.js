window.onload = function () {

    var button = document.getElementsByName('send')[0];
    button.addEventListener('click', send);

    function send(e) {
        e.preventDefault();
        var values = document.getElementsByTagName('form')[0];

        for (var i = 0; i < values.length - 1; i++) {
            console.log(values[i].value);
        }
        swal({title: 'Форма отправлена', text: 'Данные смотри в консоли', icon: 'success', button: 'ОК'});
    }
};