import "./jsonTable.css";

export default function JsonTable() {
  let houseData = {
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    color: "grey",
    pets: [
      {
        id: "Bunny",
        weight: 500,
        iq: 20,
      },
      {
        id: "Ralph",
        weight: 6,
        iq: 200,
      },
    ],
  };
  let columns = [];
  for (const [key, value] of Object.entries(houseData)) {
    if (!Array.isArray(value)) {
      columns.push(key);
    }
  }
  return (
    <div>
      <div className={"titled-table-title"}>House Data</div>
      <table>
        <thead>
        <tr className={"tr-key"}>
          {columns.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        <tr>
          {
            columns.map((column, index) => {
              return (
                <td key={index}>{houseData[column]}</td>
              )
            })
          }
        </tr>
        </tbody>
      </table>
    </div>
  );
}
