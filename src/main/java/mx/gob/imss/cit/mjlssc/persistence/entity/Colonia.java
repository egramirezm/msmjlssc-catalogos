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
 * The persistent class for the SSCC_COLONIA_CP database table.
 * 
 */
@Data
@Entity
@Table(name = "\"SSCC_COLONIA_CP\"", catalog = DataBaseShemaConf.SCHEMA_JL)
@EqualsAndHashCode(callSuper = false)
public class Colonia extends LogicDeletedEntity<Long> {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CVE_COLONIA_CP")
	private Long id;

	@Column(name = "CVE_MUNICIPIO_ALCALDIA")
	private Long cveMunicipioAlcaldia;

	@Column(name = "REF_CP")
	private String refCp;

	@Column(name = "REF_NOM_COLONIA_CP")
	private String refNomColoniaCp;

}