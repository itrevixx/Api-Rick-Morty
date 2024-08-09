/* import { useEffect, useState } from "react";
import { getPersonajes } from "../../app/services/personaje";
import {
  Container,
  Content,
  GlobalStyle,
  PaginationControls,
  Button,
  Personaje,
  SearchInput,
} from "./Buscador.styles";

const Buscador = () => {
  const [personajes, setPersonajes] = useState([]);
  const [filteredPersonajes, setFilteredPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPersonajes = async () => {
      const allPersonajes = [];
      let page = 1;
      let fetchedCharacters;

      do {
        fetchedCharacters = await getPersonajes(page);
        allPersonajes.push(...fetchedCharacters);
        page += 1;
      } while (fetchedCharacters.length > 0);

      setPersonajes(allPersonajes);
      setFilteredPersonajes(allPersonajes);
      setTotalPages(Math.ceil(allPersonajes.length / charactersPerPage));
    };

    fetchPersonajes();
  }, [charactersPerPage]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPersonajes(personajes);
    } else {
      const filtered = personajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPersonajes(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, personajes]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredPersonajes.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SearchInput
          type="text"
          placeholder="Buscar personajes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Content>
          {currentCharacters.map((personaje) => (
            <Personaje key={personaje.id}>
              <h2>{personaje.name}</h2>
              <a href={`/perfil/${personaje.id}`}>
                <img src={personaje.image} alt={personaje.name} />
              </a>
            </Personaje>
          ))}
        </Content>
        <PaginationControls>
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </Button>
          <span>
            Página {currentPage} de{" "}
            {Math.ceil(filteredPersonajes.length / charactersPerPage)}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={
              filteredPersonajes.length === 0 ||
              currentPage ===
                Math.ceil(filteredPersonajes.length / charactersPerPage)
            }
          >
            Siguiente
          </Button>
        </PaginationControls>
      </Container>
    </>
  );
};

export default Buscador;
 */
import { useEffect, useState } from "react";
import { getPersonajes, getPersonajeById } from "../../app/services/personaje";
import {
  Container,
  Content,
  GlobalStyle,
  PaginationControls,
  Button,
  SearchInput,
  CardWrapper,
  Card,
  CardFront,
  CardBack,
} from "./Buscador.styles";

const Buscador = () => {
  const [personajes, setPersonajes] = useState([]);
  const [filteredPersonajes, setFilteredPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const fetchPersonajes = async () => {
      const allPersonajes = [];
      let page = 1;
      let fetchedCharacters;

      do {
        fetchedCharacters = await getPersonajes(page);
        allPersonajes.push(...fetchedCharacters);
        page += 1;
      } while (fetchedCharacters.length > 0);

      setPersonajes(allPersonajes);
      setFilteredPersonajes(allPersonajes);
      setTotalPages(Math.ceil(allPersonajes.length / charactersPerPage));
    };

    fetchPersonajes();
  }, [charactersPerPage]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPersonajes(personajes);
    } else {
      const filtered = personajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPersonajes(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, personajes]);

  const handleCardClick = async (id) => {
    if (!flippedCards[id]) {
      const personajeInfo = await getPersonajeById(id);
      setFlippedCards({
        ...flippedCards,
        [id]: { ...personajeInfo, flipped: true },
      });
    } else {
      setFlippedCards((prev) => ({
        ...prev,
        [id]: { ...prev[id], flipped: !prev[id].flipped },
      }));
    }
  };

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredPersonajes.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "green";
      case "dead":
        return "red";
      case "unknown":
        return "gray";
      default:
        return "white"; // Por defecto, blanco si no coincide con ninguna condición
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SearchInput
          type="text"
          placeholder="Buscar personajes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Content>
          {currentCharacters.map((personaje) => (
            <CardWrapper
              key={personaje.id}
              onClick={() => handleCardClick(personaje.id)}
            >
              <Card $isFlipped={flippedCards[personaje.id]?.flipped}>
                <CardFront>
                  <h2>{personaje.name}</h2>
                  <img src={personaje.image} alt={personaje.name} />
                </CardFront>
                <CardBack>
                  {flippedCards[personaje.id] && (
                    <>
                      <p>
                        Status:{" "}
                        <span
                          style={{
                            color: getStatusColor(
                              flippedCards[personaje.id].status
                            ),
                          }}
                        >
                          {flippedCards[personaje.id].status}
                        </span>
                      </p>
                      <p>Species: {flippedCards[personaje.id].species}</p>
                      <p>Gender: {flippedCards[personaje.id].gender}</p>
                      <p className="location">
                        Location: {flippedCards[personaje.id].location.name}
                      </p>
                      <p>
                        Episodes: {flippedCards[personaje.id].episode.length}
                      </p>
                      <p className="origin">
                        Origin: {flippedCards[personaje.id].origin.name}
                      </p>
                    </>
                  )}
                </CardBack>
              </Card>
            </CardWrapper>
          ))}
        </Content>
        <PaginationControls>
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </Button>
          <span>
            Página {currentPage} de{" "}
            {Math.ceil(filteredPersonajes.length / charactersPerPage)}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={
              filteredPersonajes.length === 0 ||
              currentPage ===
                Math.ceil(filteredPersonajes.length / charactersPerPage)
            }
          >
            Siguiente
          </Button>
        </PaginationControls>
      </Container>
    </>
  );
};

export default Buscador;
