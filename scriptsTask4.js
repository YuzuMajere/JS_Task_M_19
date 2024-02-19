// function ElectricalEquipment(eqname, watt, state) {
//     this.eqName = eqname,
//         this.wattHour = watt,
//         this.state = state
// }

// ElectricalEquipment.prototype.cable = function (cable) {
//     this.cable = cable
//     console.log(this)
// };

// ElectricalEquipment.prototype.audioInterface = function (interface) {
//     this.audioInterface = interface
//     console.log(this)
// };


// const computer = new ElectricalEquipment('computer', '50', 'on');
// const lamp = new ElectricalEquipment('lamp', '10', 'off');

// lamp.cable('has');
// computer.audioInterface('headset');

class ElectricalEquipment {
    constructor(eqname, watt, state) {
        this.eqName = eqname;
        this.wattHour = watt;
        this.state = state;
    }

    cable(cable) {
        this.cableType = cable;
        console.log(this);
    }

    audioInterface(interface) {
        this.audioInterfaceType = interface;
        console.log(this);
    }
}

const computer = new ElectricalEquipment('computer', '50', 'on');
const lamp = new ElectricalEquipment('lamp', '10', 'off');

lamp.cable('has');
computer.audioInterface('headset');