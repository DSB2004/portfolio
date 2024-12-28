export interface Experience {
    company_name: string;
    position: string;
    position_type: string;
    start_time: string;
    end_time: string;
    description: string[];
}


export interface Project {
    name: string;
    about: string;
    github: string;
    live_link: string;
    start_timeline: string;
    end_timeline: string;
    tech: string[];
    new: boolean;
}
