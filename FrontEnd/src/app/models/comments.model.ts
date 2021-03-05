
import { UserModel } from "./user.model";


export interface CommentsModel {
        articleId?: string,
        user?: UserModel,
        content?: string,
        createdAt?: Date,
        answer?: []
}
