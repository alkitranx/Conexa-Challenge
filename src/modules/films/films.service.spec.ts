import { FilmsService } from './films.service';
import { FilmsRepository } from './films.repository';
import { FindAllFilmsOutput } from './dtos/output/findAllFilmsOutput';

describe('FilmsService', () => {
  let filmsService: FilmsService;
  let filmsRepositoryMock: Partial<FilmsRepository>; // Mock de FilmsRepository
  const response = {
    _id: '65232e490df45d142b0a54be',
    idReference: 1,
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl: 'texto de prueba',
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25T00:00:00.000Z',
    created: ' 2014-12-10T14:23:31.880Z',
    edited: '2014-12-20T19:49:45.256Z',
  };

  beforeEach(() => {
    filmsRepositoryMock = {
      findAllFilms: jest.fn().mockResolvedValue([
        {
          _id: '65232e490df45d142b0a54be',
          idReference: 1,
          title: 'A New Hope',
          episode_id: 4,
          opening_crawl: 'texto de prueba',
          director: 'George Lucas',
          producer: 'Gary Kurtz, Rick McCallum',
          release_date: '1977-05-25T00:00:00.000Z',
          created: ' 2014-12-10T14:23:31.880Z',
          edited: '2014-12-20T19:49:45.256Z',
        },
        {
          _id: '65232e490df45d142b0a54be',
          idReference: 1,
          title: 'A New Hope',
          episode_id: 4,
          opening_crawl: 'texto de prueba',
          director: 'George Lucas',
          producer: 'Gary Kurtz, Rick McCallum',
          release_date: '1977-05-25T00:00:00.000Z',
          created: ' 2014-12-10T14:23:31.880Z',
          edited: '2014-12-20T19:49:45.256Z',
        },
      ]),
      createFilm: jest.fn().mockResolvedValue({
        idReference: 12,
        title: 'la fuga del Jedi',
        episode_id: 15,
        opening_crawl: 'la historia de cuando el jedi se fuga',
        director: 'jorge lucas',
        producer: 'disney',
        release_date: '2023-01-01T00:00:00.000Z',
        created: '2023-01-01T00:00:00.000Z',
        edited: '2023-01-01T00:00:00.000Z',
        characters: [
          'https://swapi.dev/api/people/1/',
          'https://swapi.dev/api/people/2/',
          'https://swapi.dev/api/people/3/',
        ],
        planets: [
          'https://swapi.dev/api/planets/2/',
          'https://swapi.dev/api/planets/2/',
        ],
        starships: ['https://swapi.dev/api/starships/3/'],
        vehicles: ['https://swapi.dev/api/vehicles/4/'],
        species: ['https://swapi.dev/api/species/5/'],
        _id: '6523f5b83e6e462421a5ce89',
        __v: 0,
      }),
    };
    filmsService = new FilmsService(filmsRepositoryMock as FilmsRepository);
  });

  describe('findAllFilms', () => {
    it('should return all films in the correct output format', async () => {
      // Arrange
      const expectedOutput: FindAllFilmsOutput[] = [
        new FindAllFilmsOutput(response),
        new FindAllFilmsOutput(response),
      ];
      // Act
      const result = await filmsService.findAllFilms();

      // Assert
      expect(result).toEqual(expectedOutput);
      expect(filmsRepositoryMock.findAllFilms).toHaveBeenCalled(); // Verifica que el método del mock haya sido llamado
    });
  });
  describe('createNewFilm', () => {
    it('should create a new film with updated URLs', async () => {
      // Arrange
      const data = {
        title: 'la fuga del Jedi',
        episode_id: 12,
        opening_crawl: 'la historia de cuando el jedi se fuga',
        director: 'jorge lucas',
        producer: 'disney',
        release_date: '2023-01-01',
        created: '2023-01-01',
        edited: '2023-01-01',
        characters: [1, 2, 3],
        planets: [2, 2],
        starships: [3],
        vehicles: [4],
        species: [5],
      };

      const expectedFilm = {
        idReference: 12,
        title: 'la fuga del Jedi',
        episode_id: 15,
        opening_crawl: 'la historia de cuando el jedi se fuga',
        director: 'jorge lucas',
        producer: 'disney',
        release_date: '2023-01-01T00:00:00.000Z',
        created: '2023-01-01T00:00:00.000Z',
        edited: '2023-01-01T00:00:00.000Z',
        characters: [
          'https://swapi.dev/api/people/1/',
          'https://swapi.dev/api/people/2/',
          'https://swapi.dev/api/people/3/',
        ],
        planets: [
          'https://swapi.dev/api/planets/2/',
          'https://swapi.dev/api/planets/2/',
        ],
        starships: ['https://swapi.dev/api/starships/3/'],
        vehicles: ['https://swapi.dev/api/vehicles/4/'],
        species: ['https://swapi.dev/api/species/5/'],
        _id: '6523f5b83e6e462421a5ce89',
        __v: 0,
      };

      // Act
      const createdFilm = await filmsService.createNewFilm(data);

      // Assert
      expect(createdFilm).toEqual(expectedFilm);
    });
  });
});
