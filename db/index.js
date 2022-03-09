const { Model, DataTypes } = require('sequelize');
const dataSource = require('./dataSource');

class Comments extends Model {}
Comments.init(
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		firstname: { type: DataTypes.STRING, allowNull: true },
		surname: { type: DataTypes.STRING, allowNull: true },
		email: { type: DataTypes.STRING, allowNull: true },
		telephone: { type: DataTypes.STRING, allowNull: true },
		gender: { type: DataTypes.STRING, allowNull: true },
		dob: { type: DataTypes.STRING, allowNull: true },
		comments: { type: DataTypes.STRING, allowNull: true },
	},
	{
		sequelize: dataSource,
		tableName: 'comments',
	}
);

(async () => {
	try {
		await dataSource.sync({ alter: true });
	} catch (error) {
		console.log(error);
	} finally {
		await dataSource.close();
	}
})();
