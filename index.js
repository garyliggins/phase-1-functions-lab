// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    //returns the number of blocks given a value
    if (pickUp > 42) {
        return pickUp - 42;
    } else {
        return 42 - pickUp;
    }
    
  }

  function distanceFromHqInFeet(someValue) {
  let numOfBlocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  return numOfBlocks * 264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return (start-destination) * 264;
    }
    else {
     return (destination-start) *264;
    }
    
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let feetTraveled = distanceTravelledInFeet(start,destination)
    if (feetTraveled < 400) {
        return 0
    } else if (feetTraveled >= 400 && feetTraveled <= 2000){
        return (feetTraveled -400) * .02;
    } else if (feetTraveled > 2000 && feetTraveled <= 2500) {
        return 25
    }
    else if (feetTraveled > 2500) {
        return ('cannot travel that far');
    }

  }