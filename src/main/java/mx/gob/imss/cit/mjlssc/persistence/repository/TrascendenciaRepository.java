package mx.gob.imss.cit.mjlssc.persistence.repository; 
 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import mx.gob.imss.cit.mjlssc.persistence.entity.SsccTrascendencia;
@Repository
public interface TrascendenciaRepository extends JpaRepository<SsccTrascendencia, Long> {
	@Query("SELECT e FROM SsccTrascendencia e WHERE e.fecBaja IS NULL Order By e.desTrascendencia")
	List<SsccTrascendencia> findAll();
		 
}
