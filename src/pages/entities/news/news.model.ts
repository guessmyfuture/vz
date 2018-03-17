import { BaseEntity } from './../../../models';

export class News implements BaseEntity {
    constructor(
        public id?: number,
        public titleEnglish?: string,
        public titleTamil?: string,
        public coverUrl?: string,
        public descriptionEnglish?: any,
        public descriptionTamil?: any,
        public date?: any,
        public user?: string,
    ) {
    }
}
