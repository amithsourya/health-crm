package com.health.backend.crm_service.Repository;

import com.health.backend.crm_service.Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    List<Patient> findByNameContainingIgnoreCase(String name);
    List<Patient> findByContactContainingIgnoreCase(String contact);
}