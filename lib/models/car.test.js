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
const car2 = 
  {
    id: '1',
    make: 'Toyota',
    model: 'Prius_C',
    year: 2015,
  };


describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });

  it('should insert a car into /cars', async() => {
    const car = await Car.insert(car1);
    console.log(car);
    expect(car).toEqual(car3);

  });

  afterAll(() => {
    return pool.end();
  });
});
