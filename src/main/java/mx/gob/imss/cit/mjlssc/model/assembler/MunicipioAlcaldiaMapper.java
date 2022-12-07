package mx.gob.imss.cit.mjlssc.model.assembler;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import mx.gob.imss.cit.mjlssc.model.entity.MunicipioAlcaldiaDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.MunicipioAlcaldia;

@Mapper(componentModel = "spring")
public interface MunicipioAlcaldiaMapper {
	
	MunicipioAlcaldiaMapper INSTANCE = Mappers.getMapper(MunicipioAlcaldiaMapper.class);

	MunicipioAlcaldia toEntity(MunicipioAlcaldiaDto dto);

	MunicipioAlcaldiaDto toDto(MunicipioAlcaldia entity);

	List<MunicipioAlcaldiaDto> toLstDto(List<MunicipioAlcaldia> entity);

	List<MunicipioAlcaldia> toLstEntity(List<MunicipioAlcaldiaDto> dto);
}
