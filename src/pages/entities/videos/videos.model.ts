import { BaseEntity } from './../../../models';

export class Videos implements BaseEntity {
    constructor(
        public id?: number,
        public titleEnglish?: string,
        public titleTamil?: string,
        public videoUrl?: string,
        public date?: any,
        public user?: string,
        public descriptionEnglish?: any,
        public descriptionTamil?: any,
    ) {
    }
}
