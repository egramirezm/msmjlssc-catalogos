package mx.gob.imss.cit.mjlssc.persistence.entity;

import java.sql.Timestamp;

import javax.persistence.*;

import lombok.Data;
import mx.gob.imss.cit.mjlssc.component.DataBaseShemaConf;
import mx.gob.imss.cit.nmlssc.support.entity.LogicDeletedEntity;


/**
 * The persistent class for the SSCC_DELEGACION database table.
 * 
 */

@Entity
@Table(name = "\"SSCC_DELEGACION\"", catalog = DataBaseShemaConf.SCHEMA_JL)
public class Delegacion extends LogicDeletedEntity<Long>{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="CVE_DELEGACION")
	private Long id;

	@Column(name="CVE_USUARIO_ALTA")
	private String cveUsuarioAlta;

	@Column(name="CVE_USUARIO_BAJA")
	private String cveUsuarioBaja;

	@Column(name="CVE_USUARIO_MODIFICA")
	private String cveUsuarioModifica;

	@Column(name="DES_DELEGACION")
	private String desDelegacion;

	@Column(name="FEC_ALTA")
	private Timestamp fecAlta;

	@Column(name="FEC_BAJA")
	private Timestamp fecBaja;

	@Column(name="FEC_MODIFICA")
	private Timestamp fecModifica;

	@Column(name="REF_ABREVIACION")
	private String refAbreviacion;

}