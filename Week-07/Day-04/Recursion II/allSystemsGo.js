// You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. Keys represent the name of a system on the spacecraft; values are boolean "true" if the system is "go" for launch and "false" otherwise. Your function should return "true" only if every system is "go" for launch!

// this solution is basically 'flattening' a series of nested objects

function allSystemsGo(obj,sys=[]){
   for(let key in obj){
     if(typeof obj[key] !== 'boolean'){
       allSystemsGo(obj[key],sys);
     }else{
       sys.push(obj[key]);
     }
   }
   return sys.every(e => e === true); // Array.every is a cool method
}


let systems = {
    power: {
      batteries: true,
      solarCells: true,
      generator: true,
      fuelCells: true
    },
    telecoms: {
      antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
      },
      transmitter: true,
      receiver: true
    },
    attitudeControl: {
      stabilization: {
        spin: true,
        threeAxis: true
      }
    },
    propulsion: {
      engines: {
        engine1: true,
        engine2: true,
        engine3: false
      },
      thrusters: true,
      propellant: true
    },
    environment: {
      cooling: true,
      heating: true,
      lifeSupport: true
    }
  };

 
  
console.log(allSystemsGo(systems)); // => false