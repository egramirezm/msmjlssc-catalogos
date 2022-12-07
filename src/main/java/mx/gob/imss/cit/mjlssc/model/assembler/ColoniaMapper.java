package mx.gob.imss.cit.mjlssc.model.assembler;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import mx.gob.imss.cit.mjlssc.model.entity.ColoniaDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.Colonia;

@Mapper(componentModel = "spring")
public interface ColoniaMapper {
	
	ColoniaMapper INSTANCE = Mappers.getMapper(ColoniaMapper.class);

	Colonia toEntity(ColoniaDto dto);

	ColoniaDto toDto(Colonia entity);

	List<ColoniaDto> toLstDto(List<Colonia> entity);

	List<Colonia> toLstEntity(List<ColoniaDto> dto);
}
