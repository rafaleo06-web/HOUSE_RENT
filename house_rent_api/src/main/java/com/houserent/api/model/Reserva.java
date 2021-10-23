package com.houserent.api.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="reserva")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReserva;

    @NotNull
    @Column(name="fecha", nullable = false)
    private LocalDateTime fecha;

    public Integer getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(Integer idReserva) {
        this.idReserva = idReserva;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    @ManyToOne
    @JoinColumn(name="id_cliente", nullable=false, foreignKey=@ForeignKey(name="FK_reserva_cliente"))
    private Cliente cliente;
}
