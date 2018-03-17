import { BaseEntity } from './../../../models';

export class Problems implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public description?: any,
        public issueId?: string,
        public category?: string,
        public user?: string,
        public date?: any,
        public verified?: boolean,
    ) {
        this.verified = false;
    }
}
