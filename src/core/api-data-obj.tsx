export interface Link {
    title: string;
    url: string;
}

export interface ClubCardEventObj {
    title: string;
    description: string;
    date: string;
    imageFile: File;
    links?: Link[];    
}

