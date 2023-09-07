import React from 'react';

const UsersTable: React.FC<any> = () => {
	const rankingDeColores = [
		{ posicion: 1, color: "#FF0000", cantidad: 75489 },
		{ posicion: 2, color: "#00FF00", cantidad: 73216 },
		{ posicion: 3, color: "#0000FF", cantidad: 65489 },
		{ posicion: 4, color: "#FFFF00", cantidad: 61856 },
		{ posicion: 5, color: "#FF00FF", cantidad: 58963 },
	];

	return (
    <table style={{borderCollapse: 'collapse', width: '50%'}}>
			<thead>
				<tr>
					<th className="font-bold text-lg">Posición</th>
					<th className="font-bold text-lg">Color</th>
					<th className="font-bold text-lg">Cantidad</th>
				</tr>
			</thead>
			<tbody>
				{rankingDeColores.map((rank, index) => (
					<tr key={index}>
						<td className="text-center">{rank.posicion}</td>
						<td className="text-center" style={{backgroundColor: rank.color, textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>{rank.color}</td>
						<td className="text-center">{rank.cantidad}</td>
					</tr>
				))}
			</tbody>
    </table>
  );
};

export default UsersTable;