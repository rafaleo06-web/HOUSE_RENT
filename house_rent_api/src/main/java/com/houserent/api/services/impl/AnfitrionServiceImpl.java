package com.houserent.api.services.impl;

import com.houserent.api.model.Anfitrion;
import com.houserent.api.repository.AnfitrionRepository;
import com.houserent.api.services.AnfitrionService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AnfitrionServiceImpl implements AnfitrionService {

    private final AnfitrionRepository anfitrionRepository;

    public AnfitrionServiceImpl(AnfitrionRepository anfitrionRepository) {

        this.anfitrionRepository = anfitrionRepository;
    }

    @Override
    public Anfitrion registrarAnfitrion(Anfitrion anfitrion) {
        return anfitrionRepository.save(anfitrion);
    }

    @Override
    public Anfitrion modificarAnfitrion(Anfitrion anfitrion) {
        return anfitrionRepository.save(anfitrion);
    }

    @Override
    public List<Anfitrion> listarAnfitriones() {
        return anfitrionRepository.findAll();
    }

    @Override
    public Anfitrion obtenerAnfitrionPorId(Integer idAnfitrion) {
        return anfitrionRepository.findById(idAnfitrion).orElse(new Anfitrion());
    }

    @Override
    public void eliminarAnfitrion(Integer idAnfitrion) {
        anfitrionRepository.deleteById(idAnfitrion);

    }
}

