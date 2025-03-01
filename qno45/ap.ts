
function make_car(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
  }
  
  console.log(make_car("Toyota", "Carolla", ["color", "black"],
  ["year", 2020]));
  