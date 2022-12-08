package mx.gob.imss.cit.mjlssc.model.entity;

import java.io.Serializable;

import lombok.Data;
import mx.gob.imss.cit.mjlssc.persistence.entity.SsccTrascendencia;

/**
 * A DTO for the {@link SsccTrascendencia} entity
 */
@Data
public class SsccTrascendenciaDto implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = -7492338873588322868L;
	private  Integer id;
    private  String desTrascendencia;
}