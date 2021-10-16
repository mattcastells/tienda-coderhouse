// Stock de productos

let stockJuegos = [
    
    {id: 1, nombre: "Dark Souls", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Accion", "Aventura"], precio: 2560, desarollador: "From Software", img: './images/juegos/dark-souls-1.jpg', descripcion: 'Dark Souls es un RPG de acción en tercera persona, que se caracteriza por una atmósfera oscura y una dificultad muy por encima de los estándares actuales. El juego recibió excelentes críticas debido a su jugabilidad desafiante, su atmósfera absorbente, sus controles prácticos y a su innovador modo multijugador, la mayoría de estos aspectos importados de su predecesor espiritual Demon Souls'},
    {id: 2, nombre: "Dark Souls 2", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Accion", "Aventura"], precio: 2560, desarollador: "from software", img: './images/juegos/dark-souls-2.jpg', descripcion: 'En un mundo de reyes caídos, en un mundo cada vez más en ruinas, un elegido, de nuevo, debe encontrar a un rey. A diferencia de sus hermanos, este título no trata de los poderes superiores que rigen el mundo. Dark Souls II vuelve su mirada a los humanos, a las personas más afectadas por la decadencia del mundo'},
    {id: 3, nombre: "Dark Souls 3", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Accion", "Aventura"], precio: 6000, desarollador: "from software", img: './images/juegos/dark-souls-3.jpg', descripcion: 'Dark Souls 3 es el final de la saga y presenta un mundo, el Reino de Lothric, al borde del Apocalipsis por culpa de "la maldición de los no muertos", y la razón por la que el mundo aún no se ha sumido en la oscuridad totalmente es el sacrificio que muchos héroes e incluso dioses hicieron al reavivar la llama original, la cual se encarga de mantener la "Era del fuego", dejando que esta consumiera sus respectivas almas y cuerpos.'},
    {id: 4, nombre: "Age of Empires", plataforma: ["Pc"], genero: ["Estrategia"], precio: 1250, desarollador: "microsoft", img: './images/juegos/age-of-empires.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 5, nombre: "Age of Empires 2", plataforma: ["Pc"], genero: ["Estrategia"], precio: 1250, desarollador: "microsoft", img: './images/juegos/age-of-empires-2.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 6, nombre: "Age of Empires 3", plataforma: ["Pc"], genero: ["Estrategia"], precio: 1250, desarollador: "microsoft", img: './images/juegos/age-of-empires-3.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 7, nombre: "Bloodborne", plataforma: ["Ps4"], genero: ["Accion", "Aventura", "Terror"], precio: 1300, desarollador: "from software", img: './images/juegos/bloodborne.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 8, nombre: "Crash Bandicoot", plataforma: ["Pc", "Ps4"], genero: ["Plataformero", "Aventura"], precio: 3200, desarollador: "naughty dog", img: './images/juegos/crash-bandicoot.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 9, nombre: "Crash team racing", plataforma: ["Ps4"], genero: ["Carreras", "Infantil"], precio: 3200, desarollador: "naughty dog", img: './images/juegos/crash-team-racing.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 10, nombre: "Diablo 2", plataforma: ["Pc"], genero: ["Accion", "Aventura", "Terror"], precio: 600, desarollador: "blizzard", img: './images/juegos/diablo-2.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 11, nombre: "Diablo 3", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Accion", "Aventura", "Terror"], precio: 1700, desarollador: "blizzard", img: './images/juegos/diablo-3.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 12, nombre: "Elex", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Rpg", "Aventura"], precio: 1560, desarollador: "piranha bytes", img: './images/juegos/elex.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 13, nombre: "Fifa 20", plataforma: ["Ps4", "Xbox"], genero: ["Deportes", "Simulador"], precio: 4560, desarollador: "electronic arts", img: './images/juegos/fifa-20.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 14, nombre: "Final Fantasy 7", plataforma: ["Ps4"], genero: ["Accion", "Aventura", "Rpg"], precio: 4760, desarollador: "squre enix", img: './images/juegos/final-fantasy-7.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 15, nombre: "Final Fantasy 15", plataforma: ["Ps4", "Xbox", "Pc"], genero: ["Accion", "Aventura", "Rpg"], precio: 4760, desarollador: "squre enix", img: './images/juegos/final-fantasy-15.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 16, nombre: "Guitar Hero", plataforma: ["Ps2"], genero: ["Simulador", "Musica", "Infantil"], precio: 1200, desarollador: "activision", img: './images/juegos/guitar-hero.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 17, nombre: "Guitar Hero 2", plataforma: ["Ps2"], genero: ["Simulador", "Musica", "Infantil"], precio: 1200, desarollador: "activision", img: './images/juegos/guitar-hero-2.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 18, nombre: "Guitar Hero 3", plataforma: ["Ps2"], genero: ["Simulador", "Musica", "Infantil"], precio: 1200, desarollador: "activision", img: './images/juegos/guitar-hero-3.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 19, nombre: "Hades", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Accion", "Aventura", "Indie"], precio: 1400, desarollador: "super giant", img: './images/juegos/hades.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 20, nombre: "Hitman", plataforma: ["Pc", "Ps2"], genero: ["Accion", "Aventura"], precio: 860, desarollador: "io interactive", img: './images/juegos/hitman.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 21, nombre: "L.A. Noire", plataforma: ["Pc", "Ps3", "Xbox"], genero: ["Accion", "Aventura"], precio: 1360, desarollador: "rockstar", img: './images/juegos/la-noire.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 22, nombre: "Left 4 Dead", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Accion", "Terror"], precio: 450, desarollador: "valve", img: './images/juegos/left-4-dead.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 23, nombre: "Left 4 Dead 2", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Accion", "Terror"], precio: 800, desarollador: "valve", img: './images/juegos/left-4-dead-2.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 24, nombre: "Lethal League", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Peleas", "Indie"], precio: 1200, desarollador: "team reaptile", img: './images/juegos/lethal-league.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 25, nombre: "Uncharted 4", plataforma: ["Ps4"], genero: ["Accion", "Aventura"], precio: 1800, desarollador: "naughty dog", img: './images/juegos/uncharted-4.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 26, nombre: "Monster Hunter Rise", plataforma: ["switch"], genero: ["Accion", "Aventura"], precio: 7000, desarollador: "capcom", img: './images/juegos/monster-hunter-rise.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 27, nombre: "Monster Hunter World", plataforma: ["Pc","Ps4","Xbox"], genero: ["Accion", "Aventura"], precio: 6000, desarollador: "capcom", img: './images/juegos/monster-hunter-world.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 28, nombre: "Mortal Kombat 11", plataforma: ["Pc", "Ps4", "Xbox"], genero: ["Peleas", "Accion"], precio: 5560, desarollador: "netherrealm studios", img: './images/juegos/mortal-kombat-11.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 29, nombre: "Nioh", plataforma: ["Ps4", "Pc"], genero: ["Accion", "Aventura"], precio: 600, desarollador: "team ninja", img: './images/juegos/nioh.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 30, nombre: "Octopath Traveller", plataforma: ["nintendo", "Pc"], genero: ["Rpg", "Aventura"], precio: 2400, desarollador: "square enix", img: './images/juegos/octopath-traveller.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 31, nombre: "Persona 4", plataforma: ["Pc", "Ps4"], genero: ["rol", "Aventura"], precio: 1400, desarollador: "atlus", img: './images/juegos/persona-4.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 32, nombre: "Persona 5", plataforma: ["Ps4", "ps5"], genero: ["rol", "Aventura"], precio: 2400, desarollador: "atlus", img: './images/juegos/persona-5.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 33, nombre: "Pokemon Ultra Sol", plataforma: ["nintendo"], genero: ["Accion", "Aventura"], precio: 2300, desarollador: "game freak", img: './images/juegos/pokemon-ultra-sol.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 34, nombre: "Pokemon Ultra Luna", plataforma: ["nintendo"], genero: ["Accion", "Aventura"], precio: 1800, desarollador: "game freak", img: './images/juegos/pokemon-ultraluna.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 35, nombre: "Pokemon Y", plataforma: ["nintendo"], genero: ["Accion", "Aventura"], precio: 800, desarollador: "game freak", img: './images/juegos/pokemon-y.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 36, nombre: "Pyre", plataforma: ["Ps4", "Pc", "nintendo"], genero: ["Aventura"], precio: 1200, desarollador: "super giant", img: './images/juegos/pyre.jpg' , descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 37, nombre: "Resident Evil 2 remake", plataforma: ["Ps4", "Pc", "Xbox"], genero: ["Accion", "Terror"], precio: 1600, desarollador: "capcom", img: './images/juegos/resident-evil-2-remake.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 38, nombre: "Resident Evil 3 remake", plataforma: ["Ps4", "Pc", "Xbox"], genero: ["Accion", "Terror"], precio: 1800, desarollador: "capcom", img: './images/juegos/resident-evil-3-remake.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 39, nombre: "Resident Evil 4", plataforma: ["Ps4", "Pc", "Xbox", "nintendo"], genero: ["Accion", "Terror"], precio: 700, desarollador: "capcom", img: './images/juegos/resident-evil-4.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 40, nombre: "Resonance of Fate", plataforma: ["Ps3", "Xbox", "Pc"], genero: ["Rpg", "Aventura"], precio: 1000, desarollador: "tri ace", img: './images/juegos/resonance-of-fate.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 41, nombre: "Spyro", plataforma: ["Ps4", "Pc", "ps5"], genero: ["Infantil", "Aventura"], precio: 1400, desarollador: "naughty dog", img: './images/juegos/spyro.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 42, nombre: "Street Fighter 5", plataforma: ["Ps4", "Xbox", "Pc", "Ps3"], genero: ["Accion", "Peleas"], precio: 2100, desarollador: "capcom", img: './images/juegos/street-fighter-5.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 43, nombre: "The Legend of Zelda", plataforma: ["nintendo"], genero: ["Accion", "Aventura"], precio: 2300, desarollador: "nintendo", img: './images/juegos/the-legend-of-zelda.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 44, nombre: "The Messenger", plataforma: ["Ps4", "Xbox", "Pc"], genero: ["Accion", "Aventura"], precio: 600, desarollador: "capcom", img: './images/juegos/the-messenger.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 45, nombre: "Ufc 4", plataforma: ["Ps4", "Xbox", "Ps3", "Pc"], genero: ["Deportes", "Peleas"], precio: 1500, desarollador: "electronic arts", img: './images/juegos/ufc-4.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 46, nombre: "Uncharted Collection", plataforma: ["Ps4", "Ps3"], genero: ["Accion", "Aventura"], precio: 1400, desarollador: "naughty dog", img: './images/juegos/uncharted-collection.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 47, nombre: "Uncharted 4", plataforma: ["Ps4"], genero: ["Accion", "Aventura"], precio: 1800, desarollador: "naughty dog", img: './images/juegos/uncharted-4.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 48, nombre: "Watch dogs", plataforma: ["Ps4", "Pc"], genero: ["Accion", "Aventura"], precio: 1800, desarollador: "ubisoft", img: './images/juegos/watch-dogs.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
]