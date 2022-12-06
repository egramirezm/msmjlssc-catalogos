package mx.gob.imss.cit.mjlssc.persistence.repository; 
 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import mx.gob.imss.cit.mjlssc.persistence.entity.Estado;
@Repository
public interface EstadoRepository extends JpaRepository<Estado, Long> {
	@Query("SELECT e FROM Estado e WHERE e.fecBaja IS NULL Order By e.refNomEstado")
	List<Estado> findAll();
		 
}
