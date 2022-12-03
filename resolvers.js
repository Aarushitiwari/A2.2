// resolvers

const db = require('./db')
const _ = require("lodash");

const Query = {
    getAllDoctors: () => db.doctors,                        // get the list of all doctors

    getDoctorByID: (parent, args) => {                      // returns the requested doctor by finding using doctor ID
        const id = args.doctorID
        const doctor = _.find(db.doctors, {doctorID: String(id)});

        return doctor;
    },

    getAvailableSlotsByDoctorID: (parent, args) => {       // returns the available slots for the requested doctor
        const id = args.doctorID
        const doctor = _.find(db.doctors, {doctorID: String(id)});

        return doctor;
    },
}

const Mutation = {
    bookAppointment: (parent, args) => {
        const appointment = args.input
        const newID = Math.floor(Math.random() * 100);                  // generates a random appointment ID
        appointment.appointmentID = String(newID)

        // validate doctor and update slots
        const requestedDoctor = appointment.doctorID
        const doctor = _.find(db.doctors, {doctorID: String(requestedDoctor)});
        if(doctor.slots === 0) {  // no update takes place if slots are full
            return null
        }

        // validate patient ID
        const patient = _.find(db.patients, {patientID: String(appointment.patientID)});
        if(patient.patientName != appointment.patientName) {
            return null
        }

        // update slots for the requested doctor and add the new appointment to db
        doctor.slots -= 1
        db.appointments.push(appointment)
        return appointment
    },

    updatePatientName: (parent, args) => {
        const aptID = args.input.appointmentID
        const newName = args.input.newPatientName

        const appointment = _.find(db.appointments, {appointmentID: String(aptID)});
        appointment.patientName = newName    // updates name

        return appointment
    },

    cancelAppointment: (parent, args) => {
        const aptID = args.appointmentID

        const appointment = _.find(db.appointments, {appointmentID: String(aptID)});

        // validate doctor and update slots
        const requestedDoctor = appointment.doctorID
        const doctor = _.find(db.doctors, {doctorID: String(requestedDoctor)});
        doctor.slots += 1

        // update db by deleting the requested object
        _.remove(db.appointments, (appointment) => appointment.appointmentID === String(aptID))

        return null   // successful deletion returns null
    }
};

module.exports = {
    Query,
    Mutation
}