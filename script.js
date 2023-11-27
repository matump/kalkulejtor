const unitsData = {
    'Ciśnienie': ['pascal', 'bar'],
    'Czas': ['sekunda', 'minuta', 'godzina'],
    'Długość': ['metr', 'kilometr', 'mila'],
    'Energia': ['dżul', 'kaloria'],
    'Masa': ['kilogram', 'gram', 'funt'],
    'Objętość': ['metry_sześcienne', 'litr', 'galon'],
    'Powierzchnia': ['metr_kwadratowy', 'kilometr_kwadratowy', 'mila_kwadratowa'],
    'Prędkość': ['metry_na_sekundę', 'kilometry_na_godzinę'],
    'Siła': ['newton', 'funt_siły'],
    'Temperatura': ['stopnie_celsjusza', 'stopnie_fahrenheita', 'kelwin'],
};

    function populateUnits(categoryDropdown, unitDropdown) {
    var category = document.getElementById(categoryDropdown).value;
    var units = unitsData[category];

    var unitDropdownElement = document.getElementById(unitDropdown);
    unitDropdownElement.innerHTML = '';

    for (var i = 0; i < units.length; i++) {
    var option = document.createElement('option');
    option.value = units[i];
    option.text = units[i];
    unitDropdownElement.add(option);
}
}

    function calculateResult() {
    var fromCategory = document.getElementById('from_category').value;
    var toCategory = document.getElementById('to_category').value;

    if (fromCategory !== toCategory) {
    document.getElementById('result').value = '';
    document.getElementById('error-message').style.display = 'block';
    return false;
}

    var quantity = parseFloat(document.getElementById('quantity').value);
    var fromUnit = document.getElementById('from_unit').value;
    var toUnit = document.getElementById('to_unit').value;

    var result = convertUnits(quantity, fromUnit, toUnit);

    if (result !== null) {
    document.getElementById('result').value = result.toFixed(6);
    document.getElementById('error-message').style.display = 'none';
} else {
    document.getElementById('result').value = '';
    document.getElementById('error-message').style.display = 'block';
}

    return false;
}

    function convertUnits(quantity, fromUnit, toUnit) {
    switch (fromUnit) {
    case 'pascal':
    return convertPressure(quantity, toUnit);
    case 'bar':
    return convertPressure(quantity, toUnit);
    case 'sekunda':
    return convertTime(quantity, toUnit);
    case 'minuta':
    return convertTime(quantity, toUnit);
    case 'godzina':
    return convertTime(quantity, toUnit);
    case 'metr':
    return convertLength(quantity, toUnit);
    case 'kilometr':
    return convertLength(quantity, toUnit);
    case 'mila':
    return convertLength(quantity, toUnit);
    case 'dżul':
    return convertEnergy(quantity, toUnit);
    case 'kaloria':
    return convertEnergy(quantity, toUnit);
    case 'kilogram':
    return convertMass(quantity, toUnit);
    case 'gram':
    return convertMass(quantity, toUnit);
    case 'funt':
    return convertMass(quantity, toUnit);
    case 'metry_sześcienne':
    return convertVolume(quantity, toUnit);
    case 'litr':
    return convertVolume(quantity, toUnit);
    case 'galon':
    return convertVolume(quantity, toUnit);
    case 'metr_kwadratowy':
    return convertArea(quantity, toUnit);
    case 'kilometr_kwadratowy':
    return convertArea(quantity, toUnit);
    case 'mila_kwadratowa':
    return convertArea(quantity, toUnit);
    case 'metry_na_sekundę':
    return convertSpeed(quantity, toUnit);
    case 'kilometry_na_godzinę':
    return convertSpeed(quantity, toUnit);
    case 'newton':
    return convertForce(quantity, toUnit);
    case 'funt_siły':
    return convertForce(quantity, toUnit);
    case 'stopnie_celsjusza':
    return convertTemperature(quantity, toUnit);
    case 'stopnie_fahrenheita':
    return convertTemperature(quantity, toUnit);
    case 'kelwin':
    return convertTemperature(quantity, toUnit);
    default:
    alert('Nieobsługiwane przeliczenie');
    return null;
}
}

function convertPressure(quantity, toUnit) {
    if (toUnit === 'bar') {
        return quantity / 100000;
    } else if (toUnit === 'pascal') {
        return quantity * 100000;
    }
    return quantity;
}

function convertTime(quantity, toUnit) {
    switch (toUnit) {
        case 'minuta':
        return quantity / 60;
        case 'godzina':
        return quantity / 3600;
        case 'sekunda':
        return quantity * 60;
        default:
        return quantity;
    }
}

function convertLength(quantity, toUnit) {
    switch (toUnit) {
    case 'kilometr':
    return quantity / 1000;
    case 'mila':
    return quantity / 1609.34;
    case 'metr':
    return quantity * 1000;
    default:
    return quantity;
}
}

function convertEnergy(quantity, toUnit) {
    switch (toUnit) {
    case 'dżul':
    return quantity;
    case 'kaloria':
    return quantity / 4.184;
    case 'kilokaloria':
    return quantity / 4184;
    default:
    return quantity;
}
}

function convertMass(quantity, toUnit) {
    switch (toUnit) {
    case 'kilogram':
    return quantity;
    case 'gram':
    return quantity * 1000;
    case 'funt':
    return quantity / 0.453592;
    default:
    return quantity;
}
}

function convertVolume(quantity, toUnit) {
    switch (toUnit) {
    case 'metry_sześcienne':
    return quantity;
    case 'litr':
    return quantity * 1000;
    case 'galon':
    return quantity / 0.00378541;
    default:
    return quantity;
}
}

function convertArea(quantity, toUnit) {
    switch (toUnit) {
    case 'metr_kwadratowy':
    return quantity;
    case 'kilometr_kwadratowy':
    return quantity / 1e+6;
    case 'mila_kwadratowa':
    return quantity / 2.58999e+6;
    default:
    return quantity;
}
}

function convertSpeed(quantity, toUnit) {
    switch (toUnit) {
    case 'metry_na_sekundę':
    return quantity;
    case 'kilometry_na_godzinę':
    return quantity * 3.6;
    case 'mila_na_godzinę':
    return quantity / 0.44704;
    default:
    return quantity;
}
}

function convertForce(quantity, toUnit) {
    switch (toUnit) {
    case 'newton':
    return quantity;
    case 'funt_siły':
    return quantity / 4.44822;
    default:
    return quantity;
}
}

function convertTemperature(quantity, toUnit) {
    switch (toUnit) {
    case 'stopnie_celsjusza':
    return quantity;
    case 'stopnie_fahrenheita':
    return (quantity - 32) * 5/9;
    case 'kelwin':
    return quantity - 273.15;
    default:
    return quantity;
}
}
populateUnits('from_category', 'from_unit');
populateUnits('to_category', 'to_unit');