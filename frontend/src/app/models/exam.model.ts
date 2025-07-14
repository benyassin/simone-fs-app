export enum ExamStatus {
  A_ORGANISER = 'À organiser',
  ANNULE = 'Annulé',
  RECHERCHE = 'Recherche de place',
  CONFIRME = 'Confirmé'
}


export interface Exam {
  student: {
    first_name: string;
    last_name: string;
  };
  meeting_point?: string;
  date?: string; 
  status?: ExamStatus;
}
