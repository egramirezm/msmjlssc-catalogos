package mx.gob.imss.cit.mjlssc.persistence.repository; 
 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import mx.gob.imss.cit.mjlssc.persistence.entity.Delegacion;
@Repository
public interface DelegacionRepository extends JpaRepository<Delegacion , Long> {
	@Query("SELECT d FROM Delegacion d WHERE d.fecBaja IS NULL Order By d.desDelegacion")
	List<Delegacion> findAll();
	
	@Query("SELECT d FROM Delegacion d WHERE d.desDelegacion=?1 AND d.fecBaja IS NULL")
	Delegacion findByDesDelegacion(String desDelegacion);
	
}
