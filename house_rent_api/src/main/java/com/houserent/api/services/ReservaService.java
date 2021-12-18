package com.houserent.api.services;

import com.houserent.api.model.Reserva;

import java.util.List;

public interface ReservaService {
    Reserva registrarReserva(Reserva reserva);
    Reserva modificarReserva(Reserva reserva);
    List<Reserva> listarReserva();

    Reserva obtenerReservaPorId(Integer idReserva);
    void eliminarReserva(Integer idReserva);
}
