package com.health.backend.crm_service.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
//@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;

    private String name;

    private LocalDate dob;

    @Column(name = "phone_number")
    private String contact;

    private String email;

    @Column(name = "last_visit_date")
    private LocalDate lastVisit;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        ACTIVE,
        INACTIVE
    }

}
