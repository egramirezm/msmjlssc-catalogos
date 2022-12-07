package mx.gob.imss.cit.mjlssc.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.gob.imss.cit.mjlssc.persistence.entity.Colonia;


public interface ColoniaRepository extends JpaRepository<Colonia, Long> {

	public List<Colonia> findByCveMunicipioAlcaldiaOrderByRefNomColoniaCp(Long cveMunicipio);
	
	public Colonia findColoniaById(Long id);

}
