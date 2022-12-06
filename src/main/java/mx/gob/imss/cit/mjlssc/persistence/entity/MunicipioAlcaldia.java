package mx.gob.imss.cit.mjlssc.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import mx.gob.imss.cit.mjlssc.component.DataBaseShemaConf;
import mx.gob.imss.cit.mjlssc.utils.Constantes;
import mx.gob.imss.cit.nmlssc.support.entity.LogicDeletedEntity;

/**
 * The persistent class for the SSCC_MUNICIPIO_ALCALDIA database table.
 * 
 */
@Data
@Entity
@EqualsAndHashCode(callSuper = false)
@Table(name = "\"SSCC_MUNICIPIO_ALCALDIA\"", catalog = DataBaseShemaConf.SCHEMA_JL)
public class MunicipioAlcaldia extends LogicDeletedEntity<Long> {
	private static final long serialVersionUID = 1323534352347890L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CVE_MUNICIPIO_ALCALDIA")
	private Long id;

	@Column(name = "CVE_ESTADO")
	private Long cveEstado;

	@Column(name = "REF_NOM_MUNICIPIO_ALCALDIA")
	private String refNomMunicipioAlcaldia;

}