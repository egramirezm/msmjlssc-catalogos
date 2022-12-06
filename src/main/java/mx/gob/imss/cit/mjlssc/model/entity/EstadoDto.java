package mx.gob.imss.cit.mjlssc.model.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * A DTO for the {@link Estado} entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EstadoDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 128052803305186026L;
	private Long id;
	private String refNomEstado;

}