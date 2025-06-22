package com.health.backend.crm_service.Service;

import com.health.backend.crm_service.Model.Patient;
import com.health.backend.crm_service.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Optional<Patient> getPatientById(Long id) {
        return patientRepository.findById(id);
    }

    @Override
    public Optional<Patient> updatePatient(Long id, Patient updatedPatient) {
        Optional<Patient> optionalPatient = patientRepository.findById(id);

        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();

            if (updatedPatient.getName() != null && !updatedPatient.getName().isBlank()) {
                patient.setName(updatedPatient.getName());
            }
            if (updatedPatient.getDob() != null) {
                patient.setDob(updatedPatient.getDob());
            }
            if (updatedPatient.getContact() != null && !updatedPatient.getContact().isBlank()) {
                patient.setContact(updatedPatient.getContact());
            }
            if (updatedPatient.getEmail() != null && !updatedPatient.getEmail().isBlank()) {
                patient.setEmail(updatedPatient.getEmail());
            }
            if (updatedPatient.getLastVisit() != null) {
                patient.setLastVisit(updatedPatient.getLastVisit());
            }
            if (updatedPatient.getStatus() != null) {
                patient.setStatus(updatedPatient.getStatus());
            }

            Patient savedPatient = patientRepository.save(patient);
            return Optional.of(savedPatient);
        } else {
            return Optional.empty();
        }
    }


    @Override
    public boolean deletePatient(Long id) {
        if (patientRepository.existsById(id)) {
            patientRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Patient> searchPatientsByName(String name) {
        return patientRepository.findByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Patient> searchPatientsByContact(String contact) {
        return patientRepository.findByContactContainingIgnoreCase(contact);
    }
}