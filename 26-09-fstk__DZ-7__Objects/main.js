function Vehicle(name, wheels) {
    this.name = name;
    this.wheels = wheels;

    var photo = function () {
        var par = document.createElement('p');
        par.innerHTML = "Фото";
        document.body.appendChild(par);
    };

    this.setPhoto = function (namePhoto) {
        photo();
        var image = document.createElement('img');
        image.setAttribute('src', 'img/' + namePhoto);
        document.body.appendChild(image);
    };
}

var vehicle = new Vehicle('VEHICLE');

///////////////////////////////////////////////////////////////////////////////

function Car(name) {
    this.name = name;

    this.setNumberOfDoors = function () {
        document.write('Количество дверей');
    }
}

Car.prototype = vehicle;

var car = new Car('Auto');

////////////////////////////////////////////////////////////////////////////////

function Brand(doors) {
    this.doors = doors;
    this.wheels = 4;

    this.setNumberOfDoors = function (doors) {
        document.write('Количество дверей: ' + doors);
    }
}

Brand.prototype = car;

var brand = new Brand(4);

////////////////////////////////////////////////////////////////////////////////

function Model(brand, model) {
    this.brand = brand;
    this.model = model;
}

Model.prototype = brand;

Model.prototype.writeBrandAndModel = function () {
    document.write(this.brand + ' ' + this.model + '<br><br>');

};

var audiA7 = new Model('Audi', 'A7');
console.log(audiA7);
audiA7.writeBrandAndModel();
audiA7.setNumberOfDoors(5);
audiA7.setPhoto('audia7.jpg');
