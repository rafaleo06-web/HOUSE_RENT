package com.houserent.api.repository;

import com.houserent.api.model.Habitacion;
import com.houserent.api.model.Hospedaje;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospedajeRepository extends JpaRepository<Hospedaje,Integer> {
}
