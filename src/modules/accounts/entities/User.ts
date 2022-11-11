import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

@Entity("users")
export class User {
	@PrimaryColumn()
	id?: string;

	@Column()
	name!: string;

	@Column()
	avatar?: string;

	@Column()
	email!: string;

	@Column()
	password!: string;

	@Column()
	drive_license!: string;

	@Column()
	isAdmin!: boolean;

	@CreateDateColumn()
	created_at!: Date;

	constructor() {
		if (!this.id) this.id = uuid();
	}
}
