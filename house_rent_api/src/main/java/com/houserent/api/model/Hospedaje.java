package com.houserent.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="hospedajes")
public class Hospedaje {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idHospedaje;

    @Getter @Setter
    @NotNull
    @Size(min=4, message = "Nombre debe tener minimo 4 caracteres")
    @Column(name="nombre", nullable = false, length = 70)
    private String nombre;

    @Getter @Setter
    @NotNull
    @Size(min=20, message = "Descripcion debe tener COMO minimo 20 caracteres")
    @Column(name="descripcion", nullable = false, length = 70)
    private String descripcion;

    @Getter @Setter
    @NotNull
    @Size(min=3, message = "ciudad debe tener COMO minimo 3 caracteres")
    @Column(name="ciudad", nullable = false, length = 30)
    private String ciudad;

    @Getter @Setter
    @NotNull
    @Size(min=3, message = "direccion debe tener COMO minimo 3 caracteres")
    @Column(name="direccion", nullable = false, length = 30)
    private String direccion;

    @Getter @Setter
    @NotNull
    @Size(min=3, message = "provincia debe tener COMO minimo 3 caracteres")
    @Column(name="provincia", nullable = false, length = 30)
    private String provincia;



}
