package com.houserent.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="reserva")
public class Reserva {

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReserva;

    @Getter @Setter
    @Column(name="fecha", nullable = false)
    private LocalDateTime fecha;

    @ManyToOne
    @JoinColumn(name="id_cliente", nullable=false, foreignKey=@ForeignKey(name="FK_reserva_cliente"))
    private Cliente cliente;


}
