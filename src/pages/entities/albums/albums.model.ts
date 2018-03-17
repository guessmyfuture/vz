import { BaseEntity } from './../../../models';

export class Albums implements BaseEntity {
    constructor(
        public id?: number,
        public titleEnglish?: string,
        public titleTamil?: string,
        public date?: any,
        public user?: string,
        public cover?: string,
    ) {
    }
}
