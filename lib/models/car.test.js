const fs = require('fs');
const pool = require('../utils/pool');
const Car = require('./car');

// insert a car
// findById a car
// find all cars
// update a car by id
// delete a car by id
const car1 = 
  {
    make: 'Toyota',
    model: 'Prius_C',
    year: 2015,
  };
const car3 = 
  {
    make: 'Toyota',
    model: 'Prius',
    year: 2010,
  };
const car2 = 
  {
    id: '1',
    make: 'Toyota',
    model: 'Prius_C',
    year: 2015,
  };
const car4 = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Prius_C',
    year: 2015,
  },
  {
    id: '2',
    make: 'Toyota',
    model: 'Prius',
    year: 2010,
  }];

const car5 = 
  {
    id: '1',
    make: 'Toyota',
    model: 'Prius_C',
    year: 2018,
  };




describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });

  it('should insert a car into /cars', async() => {
    const car = await Car.insert(car1);
    expect(car).toEqual(car2);

  });

  it('should find a car by ID', async() => {
    await Car.insert(car1);
    await Car.insert(car3);
    const car = await Car.vallet(1);
    expect(car).toEqual(car2);
  });

  it('should find all cars', async() => {
    await Car.insert(car1);
    await Car.insert(car3);
    const car = await Car.getAllCars();
    expect(car).toEqual(car4);
  });

  it('should update a car by id', async() => {
    await Car.insert(car1);
    await Car.insert(car3);
    const car = await Car.updateCar(1, 2018);
    expect(car).toEqual(car5);
  });

  afterAll(() => {
    return pool.end();
  });
});
