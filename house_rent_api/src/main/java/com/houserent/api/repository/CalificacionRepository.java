package com.houserent.api.repository;

import com.houserent.api.model.Calificacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalificacionRepository extends JpaRepository<Calificacion,Integer> {
}
