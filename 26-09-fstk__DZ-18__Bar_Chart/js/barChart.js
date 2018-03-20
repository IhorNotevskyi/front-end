function createBarChart(data, width, height, color) {

    // Создаем контейнер для диаграммы
    var chart = document.createElement("div");

    chart.style.width = width - 8 + "px";
    chart.style.height = height + 8 + "px";
    chart.style.position = "relative";
    chart.style.border = '2px solid black';
    chart.style.transform = 'rotate(90deg) translate(170px, 110px)';

    // Находим максимальное значение в массиве данных
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) {
            max = data[i];
        }
    }

    var scale = height / max;
    var barWidth = Math.floor(width / data.length);

    // Создаем отдельный элемент диаграммы
    for (i = 0; i < data.length; i++) {

        var bar = document.createElement("div");

        var len = data[i] * scale;

        bar.style.height = len + "px";
        bar.style.width = barWidth - 4 + "px";

        bar.style.position = "absolute";
        bar.style.margin = "4px";
        bar.style.bottom = "0px";
        bar.style.left = barWidth * i + "px";

        var ending = 'ей';
        if (len % 100 < 11 || len % 100 > 14) {
            switch (len % 10) {
                case 1: ending = 'ь'; break;
                case 2:
                case 3:
                case 4: ending = 'я'; break;
            }
        }

        bar.setAttribute('data-width', 'Длина: ' + len + ' пиксел' + ending);

        bar.style.backgroundColor = color;

        bar.addEventListener("mouseover", onOver);
        bar.addEventListener("mouseout", onOut);

        chart.appendChild(bar);
    }

    var floatTitle = document.querySelector("#floatTitle");

    document.onmousemove = moveTip;

    function moveTip(e) {
        // Для браузера IE6-8
        if (document.all)  {
            var x = event.clientX + document.body.scrollLeft;
            var y = event.clientY + document.body.scrollTop;

        // Для остальных браузеров
        } else {
            x = e.pageX; // Координата X курсора
            y = e.pageY; // Координата Y курсора
        }

        // Показывать слой справа от курсора
        if ((x + 30) < document.body.clientWidth) {
            floatTitle.style.left = x + 20 + 'px';

        // Показывать слой слева от курсора
        } else {
            floatTitle.style.left = x + 20 + 'px';
        }

        // Положение от  верхнего края окна браузера
        floatTitle.style.top = y + 'px';
    }

    function onOver() {
        this.style.backgroundColor = "red";
        this.style.cursor = "pointer";
        this.style.transition = "all .1s ease-out";

        if (this.dataset.width) {
            floatTitle.innerHTML = this.dataset.width;
            floatTitle.style.display = "block";
            floatTitle.style.transition = "all .1s ease-out";
        }
    }

    function onOut(e) {
        e.target.style.backgroundColor = color;

        floatTitle.style.display = "none";
    }

    return chart;
}