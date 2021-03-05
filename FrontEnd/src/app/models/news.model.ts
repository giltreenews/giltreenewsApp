import { CommentsModel } from 'src/app/models/comments.model';
export interface NewsModel {
    _id?: string;
    source?: 
        {id?: string, name?: string};
        author?: string;
        title?: string;
        description?: string;
        url?: string;
        urlToImage?: string;
        publishedAt?: string;
        content?: string;
        category?: string;
        comments? : CommentsModel[];
}