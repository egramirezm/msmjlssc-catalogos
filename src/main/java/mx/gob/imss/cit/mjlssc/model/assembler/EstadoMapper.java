package mx.gob.imss.cit.mjlssc.model.assembler;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import mx.gob.imss.cit.mjlssc.model.entity.EstadoDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.Estado;

@Mapper(componentModel = "spring")
public interface EstadoMapper {
	
	EstadoMapper INSTANCE = Mappers.getMapper(EstadoMapper.class);

	Estado toEntity(EstadoDto dto);

	EstadoDto toDto(Estado entity);

	List<EstadoDto> toLstDto(List<Estado> entity);

	List<Estado> toLstEntity(List<EstadoDto> dto);
}
