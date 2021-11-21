package com.houserent.api.repository;

import com.houserent.api.model.Habitacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitacionRepository extends JpaRepository<Habitacion,Integer> {

}