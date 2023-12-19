import "./App.css";

export default function App() {
  function TitledTable({ title, children }) {
    return (
      <div>
        <div className={"titled-table-title"}>{title}</div>
        <table>{children}</table>
      </div>
    );
  }

  let houseData = JSON.stringify({
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
  });

  const house = JSON.parse(houseData);
  let [houseKeys, houseValues] = [[], []];

  for (const [key, value] of Object.entries(house)) {
    if (typeof value != "object") {
      houseKeys.push(key);
      houseValues.push(value);
    }
  }

  return (
    <div>
      <h1>my-react-app</h1>
      <p>{houseKeys.join(", ")}</p>
      <TitledTable title={"house"}>
        <tbody>
          <tr className={"tr-key"}>
            {houseKeys.map((key) => (
              <td>{key}</td>
            ))}
          </tr>
          <tr>
            {houseValues.map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        </tbody>
      </TitledTable>
    </div>
  );
}
