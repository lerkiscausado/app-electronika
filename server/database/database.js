import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'adossofn_myfavorites', 
    'adossofn_admin', 
    '80082552700ers', 
    {
        host: 'cpanel6-co.conexcol.net',
        dialect: 'mysql' /*| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    }
);