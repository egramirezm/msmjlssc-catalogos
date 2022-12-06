package mx.gob.imss.cit.mjlssc.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import mx.gob.imss.cit.mjlssc.persistence.entity.MunicipioAlcaldia;

@Repository
public interface MunicipioAlcaldiaRepository extends JpaRepository<MunicipioAlcaldia, Long> {
	@Query("SELECT e FROM MunicipioAlcaldia e WHERE e.fecBaja IS NULL Order By e.refNomMunicipioAlcaldia")
	public List<MunicipioAlcaldia> findAll();

	public List<MunicipioAlcaldia> findByCveEstadoOrderByRefNomMunicipioAlcaldia(Long cveEstado);
	
	public MunicipioAlcaldia findMunicipioAlcaldiaById(Long id);

}
