export interface Subject {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface SubjectsResponse {
  message: string;
  metadata: Metadata;
  subjects: Subject[];
}
