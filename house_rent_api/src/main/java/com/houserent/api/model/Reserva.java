package com.houserent.api.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="reservas")
public class Reserva {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReserva;

    @Getter @Setter
    @NotNull
    @JoinColumn(name = "idCliente", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Cliente clientes;

    @Getter @Setter
    @NotNull
    @JoinColumn(name = "idHospedaje", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Hospedaje hospedajes;

    @Getter @Setter
    @NotNull
    @JoinColumn(name = "idHabitacion", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Habitacion habitacion;

    @Getter @Setter
    @NotNull
    @Size(min=10, message = "Descripcion debe tener COMO minimo 20 caracteres")
    @Column(name="descripcion", nullable = false, length = 70)
    private String descripcion;

    @Getter @Setter
    @NotNull
    @Size(min=3, message = "ciudad debe tener COMO minimo 3 caracteres")
    @Column(name="fecha", nullable = false, length = 30)
    private String fecha;

}
