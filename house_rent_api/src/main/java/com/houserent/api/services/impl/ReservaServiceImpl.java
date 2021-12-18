package com.houserent.api.services.impl;


import com.houserent.api.model.Reserva;
import com.houserent.api.repository.ReservaRepository;
import com.houserent.api.services.ReservaService;
import org.springframework.stereotype.Service;
import java.util.List;

import java.util.List;
@Service
public class ReservaServiceImpl implements ReservaService {
    private final ReservaRepository reservaRepository;
    public ReservaServiceImpl(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Override
    public Reserva registrarReserva(Reserva reserva) { return reservaRepository.save(reserva);}

    @Override
    public Reserva modificarReserva(Reserva reserva) { return reservaRepository.save(reserva);}

    @Override
    public List<Reserva> listarReserva() {return reservaRepository.findAll(); }

    @Override
    public void eliminarReserva(Integer idReserva) { reservaRepository.deleteById(idReserva);}

    @Override
    public Reserva obtenerReservaPorId(Integer idReserva) {
        return reservaRepository.findById(idReserva).orElse(new Reserva());
    }
}
