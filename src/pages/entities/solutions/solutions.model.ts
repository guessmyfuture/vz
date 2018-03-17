import { BaseEntity } from './../../../models';

export class Solutions implements BaseEntity {
    constructor(
        public id?: number,
        public replyDescriptionEnglish?: any,
        public replyDescriptionTamil?: any,
        public date?: any,
        public user?: string,
        public issueId?: string,
    ) {
    }
}
