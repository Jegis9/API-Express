import { response } from 'express'
import pg from 'pg'

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin123',
    database: 'usuarios',
    port: '5432'

})


