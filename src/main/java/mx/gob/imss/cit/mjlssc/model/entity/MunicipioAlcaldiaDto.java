package mx.gob.imss.cit.mjlssc.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * A DTO for the {@link MunicipioAlcaldia} entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MunicipioAlcaldiaDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 128052803305186026L;
	private Long id;
	private Long cveEstado;
	private String refNomMunicipioAlcaldia;

}