package GerenciadorCampeonato.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import GerenciadorCampeonato.Model.Time;

@Repository
public interface TimeRepository extends CrudRepository<Time, Integer> {

    /*List<Time> findTimesByUsuario(Usuario usuario);*/
    
}
