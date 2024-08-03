import { IData } from '../core/types/index';

const Puesto: IData = {
  id: 1,
  name: 'Puesto',
  values: [
    'CHIEF EXECUTIVE OFFICER - CEO',
    'CHIEF OPERANTING OFFICER - COO',
    'CHIEF FINANCIAL OFFICE - CFO',
    'BUSSINES MANAGER',
    'SHOE FACTORY MANAGER',
    'LÍDER DESARROLLO TÉCNICO',
    'LÍDER MODELADO Y PATRONAJE',
    'LÍDER CECOM',
    'LÍDER CEDIS',
    'LÍDER INGENIERÍA',
    'LÍDER PRODUCCIÓN',
    'LÍDER RECURSOS HUMANOS',
    'LÍDER CALIDAD',
    'LÍDER HARDWARE Y SEGURIDAD PATRIMONIAL',
    'EJECUTIVO DE CLIENTE COPPEL-ANDREA',
    'EJECUTIVO DE CLIENTE VARIOS',
    'EJECUTIVO DE CLIENTE STEVE MADDEN',
    'COORD. MODELISTAS',
    'MODELISTA',
    'COORD. MODELISTAS',
    'MODELISTA',
    'COOR. COSTOS Y ESPECIFIACIONES DE PRODUCCIÓN',
    'COOR. DISEÑO CONCEPTUAL',
    'COOR. DE MONTADO',
    'DISEÑADORA',
    'SUP. DE ALMACEN',
    'SUP. CEDIS',
    'ING. IMPLEMENTACIÓN Y PROCESOS',
    'ING. PROGRAMACIÓN Y NOMINA',
    'ING DE PROCESOS',
    'MECANICO',
    'SUPERVISOR DE CORTE-COORDINADO',
    'SUPERVISOR DE PESPUNTE',
    'SUP. KANBAN',
    'SUPERVISOR DE AVIOS',
    'SUPERVISOR DE MONTADO-ADORNO',
    'DOCTOR',
    'PRACTICANTE',
    'AUXILIAR DE DESARROLLO DE MATERIALES',
    'AUXILIAR FABRICACIÓN MUESTRAS',
    'AUX.CARDEX CECOM',
    'CHOFER CEDIS',
    'AUX. EMBARQUE CEDIS',
    'TÉCNICO IMPLEMENTADOR',
    'AUXILIAR DE RH',
    'AUX. DE PESPUNTE',
    'AUXILIAR DE KANBAN',
    'AUXILIAR EMBARQUE FABRICA',
    'AUX RH',
    'RECEPCIONISTA FABRICA',
    'VIGILANTE',
    'INSPECTOR DE CALIDAD',
    'OP. EMBARQUE CEDIS',
    'OP. MUESTRAS',
    'OP. CECOM',
    'CHOFER',
    'OP. ASEO',
    'OP. COMODÍN',
  ],
};

const Jerarquia: IData = {
  id: 1,
  name: 'Jerarquia',
  values: [
    'CHIEF EXECUTIVE OFFICER - CEO',
    'CHIEF EXECUTIVO OPERATING - COO',
    'MANAGER',
    'LIDER',
    'COORDINADOR',
    'SUP/TEC/EXPERTO',
    'AUXILIAR',
    'OPERATIVO',
  ],
};

const Area: IData = {
  id: 1,
  name: 'Proceso',
  values: ['Area', 'Departamento', 'Sector', 'Proceso'],
};

const Academico: IData = {
  id: 4,
  name: 'Nivel académico',
  values: [
    'Maestría',
    'Licenciatura/Ingeniería',
    'TSU',
    'Preparatoria/ Técnico',
    'Secundaria',
    'Preferentemente Primaria',
  ],
};

const Idiomas: IData = {
  id: 4,
  name: 'Idiomas extranjeros',
  values: [
    'Inglés fluente',
    'Ingles conversación',
    'Mandarín',
    'Italiano',
    'Alemán',
    'Francés',
  ],
};

const Experiencia: IData = {
  id: 4,
  name: 'Experiencia',
  values: [
    'Más de 5 años',
    '2 a 5 años',
    '1 a 2 años',
    '6 meses a 1 año',
    'Hasta 6 meses',
    'Sin experiencia',
  ],
};

const Licencia: IData = {
  id: 4,
  name: 'Licencia de manejo',
  values: ['No aplica', 'Tipo A', 'Tipo B', 'Tipo C'],
};

const Competencias: IData = {
  id: 5,
  name: 'Competencias específicas del proceso',
  values: [
    'Administracion de proyectos',
    'Auditoria en los procesos de fabricación',
    'Cálculo de consumos de los materiales directos e indirectos',
    'Cálculo de cotso de la materia prima',
    'Control de producto no conforme',
    'Diseño en Auto Cad',
    'Eliminación de los 7 desperdicios de la manufactura',
    'Los materiales para la fabricación de los productos',
    'Planeación, programación y control de la producción',
    'Pruebas físicas de los materiales utilizados en la fabricación del calzado',
    'Salud y seguridad en el trabajo',
    'Sistema de gestión de la calidad',
    'Implementación de nuevos productos en la producción',
    'Lay out - proyectos de distribución física en la planta',
    'Estudio del Trabajo - tiempos y movimientos',
    'Lean Manufacturing',
    'Impartir capacitación a los trabajadores en los procesos de fabricación',
    'Lean Manufacturing',
    'AMEF - Análisis de Modo y Efecto de Falla',
    'MASP - Metodología para Análisis y Solución de Problemas',
    'El trabajo estándar - Instrucción de trabajo (POE´s)',
    'Balanceo de líneas de producción',
  ],
};

const Comportamientos: IData = {
  id: 5,
  name: 'Competencias Comportamentales',
  values: [
    'Lograr resultados',
    'Orientación al cliente externo/interno',
    'Iniciativa e innovación',
    'Trabajo en equipo',
    'Comunicación',
    'Liderazgo',
    'Agilidad',
    'Administracion del tiempo',
    'Capacidad de analisis',
    'Capacidad de cumplir normas y procediminetos',
    'Comunicacion interpersonal',
    'Creatividad',
    'Disciplina',
    'Enfoque en resultados',
    'Flexibilidad e innovacion',
    'Liderazgo participativo',
    'Organizacion y planeacion',
    'Persistencia y determinacion',
    'Proactividad',
    'Solucion de Problemas',
    'Toma de deciciones',
    'Vision sistemica',
  ],
};

const Calificaciones: IData = {
  id: 5,
  name: 'Calificaciones',
  values: ['1', '3', '5'],
};

export {
  Puesto,
  Jerarquia,
  Area,
  Academico,
  Idiomas,
  Experiencia,
  Licencia,
  Competencias,
  Comportamientos,
  Calificaciones,
};
