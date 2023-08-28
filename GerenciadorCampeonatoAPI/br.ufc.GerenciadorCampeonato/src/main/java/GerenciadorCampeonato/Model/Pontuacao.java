package GerenciadorCampeonato.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Pontuacao {

	@Id
	@GeneratedValue
	private int id;
	private String hora;
	@ManyToOne
	private Partida partida;

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

}
