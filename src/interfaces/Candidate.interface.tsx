// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number;
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
    email: string;
    company: string;
    location: string;
}