package mx.gob.imss.cit.mjlssc.persistence.entity;
import javax.persistence.*;
import lombok.Data;
import mx.gob.imss.cit.mjlssc.component.DataBaseShemaConf;
import mx.gob.imss.cit.nmlssc.support.entity.LogicDeletedEntity;



/**
 * The persistent class for the SSCC_ESTADO database table.
 * 
 */
@Data
@Entity
@Table(name = "\"SSCC_ESTADO\"", catalog = DataBaseShemaConf.SCHEMA_JL)
public class Estado extends LogicDeletedEntity<Long>{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="CVE_ESTADO")
	private Long id;
	
	@Column(name="IND_ESTATUS")
	private byte indEstatus;

	@Column(name="REF_NOM_ESTADO")
	private String refNomEstado;
	
}