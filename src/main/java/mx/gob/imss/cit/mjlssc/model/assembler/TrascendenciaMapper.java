package mx.gob.imss.cit.mjlssc.model.assembler;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import mx.gob.imss.cit.mjlssc.model.entity.SsccTrascendenciaDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.SsccTrascendencia;

@Mapper(componentModel = "spring")
public interface TrascendenciaMapper {
	
	TrascendenciaMapper INSTANCE = Mappers.getMapper(TrascendenciaMapper.class);

	SsccTrascendencia toEntity(SsccTrascendenciaDto dto);

	SsccTrascendenciaDto toDto(SsccTrascendencia entity);

	List<SsccTrascendenciaDto> toLstDto(List<SsccTrascendencia> entity);

	List<SsccTrascendencia> toLstEntity(List<SsccTrascendenciaDto> dto);
}
