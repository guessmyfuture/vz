import { BaseEntity } from './../../../models';

export class About implements BaseEntity {
    constructor(
        public id?: number,
        public description?: string,
    ) {
    }
}
