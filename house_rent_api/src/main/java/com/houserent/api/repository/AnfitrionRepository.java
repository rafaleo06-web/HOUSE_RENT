package com.houserent.api.repository;

import com.houserent.api.model.Anfitrion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnfitrionRepository extends JpaRepository<Anfitrion,Integer> {

}