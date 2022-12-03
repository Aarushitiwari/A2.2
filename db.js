// hard-coded default data - doctor, patient, appointment

const doctors =[{
    doctorID: "user001",
    doctorName: "Alice",
    clinicName: "alice-script",
    specialty: "Physician",
    slots: 14,
},{
    doctorID: "user002",
    doctorName: "Makky",
    clinicName: "makky-try",
    specialty: "Orthodontist",
    slots: 1,
}]

const patients = [{
    patientID: "01",
    patientName: "Alex"
},{
    patientID: "012",
    patientName: "Cynthia"
},{
    patientID: "03",
    patientName: "Susan"
},{
    patientID: "055",
    patientName: "Chris"
},{
    patientID: "0123",
    patientName: "Sam"
}]

const appointments = [{
    appointmentID: "UHF9",
    patientID: "055",
    patientName: "Chris",
    doctorID: "user001",
    doctorName: "Alice"
}, {
    appointmentID: "AM09",
    patientID: "0123",
    patientName: "Sam",
    doctorID: "user002",
    doctorName: "Makky",
}, {
    appointmentID: "JS80K",
    patientID: "012",
    patientName: "Cynthia",
    doctorID: "user001",
    doctorName: "Alice"
}]

module.exports = {
    doctors,
    patients,
    appointments
}

