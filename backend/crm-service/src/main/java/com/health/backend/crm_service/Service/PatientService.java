package com.health.backend.crm_service.Service;

import com.health.backend.crm_service.Model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientService {
    Patient createPatient(Patient patient);
    List<Patient> getAllPatients();
    Optional<Patient> getPatientById(Long id);
    Optional<Patient> updatePatient(Long id, Patient updatedPatient);
    boolean deletePatient(Long id);
    List<Patient> searchPatientsByName(String name);
    List<Patient> searchPatientsByContact(String contact);
}