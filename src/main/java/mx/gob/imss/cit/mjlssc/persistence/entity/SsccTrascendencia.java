package mx.gob.imss.cit.mjlssc.persistence.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import mx.gob.imss.cit.mjlssc.component.DataBaseShemaConf;

@Data
@Entity
@Table(name = "SSCC_TRASCENDENCIA", catalog = DataBaseShemaConf.SCHEMANML)
public class SsccTrascendencia implements Serializable {
    private static final long serialVersionUID = 3766279227025949887L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CVE_TRASCENDENCIA", nullable = false)
    private Long id;

    @Size(max = 80)
    @Column(name = "DES_TRASCENDENCIA", length = 80)
    private String desTrascendencia;

    @Column(name = "FEC_BAJA")
    private Date fecBaja;

}