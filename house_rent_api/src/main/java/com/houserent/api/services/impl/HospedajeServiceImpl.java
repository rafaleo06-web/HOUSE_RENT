package com.houserent.api.services.impl;

import com.houserent.api.model.Anfitrion;
import com.houserent.api.model.Hospedaje;
import com.houserent.api.repository.HospedajeRepository;
import com.houserent.api.services.HospedajeService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HospedajeServiceImpl implements HospedajeService {

    private final HospedajeRepository hospedajeRepository;

    public HospedajeServiceImpl(HospedajeRepository hospedajeRepository) {
        this.hospedajeRepository = hospedajeRepository;
    }

    @Override
    public Hospedaje registrarHospedaje(Hospedaje hospedaje) {
        return hospedajeRepository.save(hospedaje);
    }

    @Override
    public Hospedaje modificarHospedaje(Hospedaje hospedaje) {
        return hospedajeRepository.save(hospedaje);
    }

    @Override
    public List<Hospedaje> listarHospedaje() {
        return hospedajeRepository.findAll();
    }

    @Override
    public void eliminarHospedaje(Integer idHospedaje) {
        hospedajeRepository.deleteById(idHospedaje);
    }

    @Override
    public Hospedaje obtenerHospedajePorId(Integer idHospedaje) {
        return hospedajeRepository.findById(idHospedaje).orElse(new Hospedaje());
    }
}