package com.houserent.api.services;

import com.houserent.api.model.Anfitrion;
import java.util.List;

public interface AnfitrionService {
    Anfitrion registrarAnfitrion(Anfitrion anfitrion);
    Anfitrion modificarAnfitrion(Anfitrion anfitrion);
    List<Anfitrion> listarAnfitriones();
    Anfitrion obtenerAnfitrionPorId(Integer idAnfitrion);
    void eliminarAnfitrion(Integer idAnfitrion);
}
