import { BaseEntity } from './../../../models';

export class Images implements BaseEntity {
    constructor(
        public id?: number,
        public imageUrl?: string,
        public date?: any,
        public user?: string,
        public albumId?: number,
    ) {
    }
}
