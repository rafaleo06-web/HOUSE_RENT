package com.houserent.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="anfitriones")
public class Anfitrion {

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAnfitrion;

    @Getter @Setter
    @NotNull
    @Size(min=4, message = "Nombre debe tener 4 caracteres")
    @Column(name="nombres", nullable = false, length = 70)
    private String nombres;

    @Getter @Setter
    @NotNull
    @Size(min=4, message = "Apellidos debe tener 4 caracteres")
    @Column(name="apellidos", nullable = false, length = 70)
    private String apellidos;

    @Getter @Setter
    @Column(name="fotoPerfil", nullable = false, length = 150)
    private String fotoPerfil;

    @Getter @Setter
    @NotNull
    @Size(min=9, max=9,message = "Telefono debe tener 9 caracteres")
    @Column(name="telefono", nullable = false, length = 9)
    private String telefono;

    @Getter @Setter
    @Email(message = "Email formato incorrecto")
    @Column(name="email", nullable = false, length = 55, unique = true)
    private String email;

}