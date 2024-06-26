import React, { useState, useEffect } from "react";
import axios from "axios"; // install axios --> npm install axios
import ReactApexChart from "react-apexcharts";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const dataChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



function GestionStock() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    id: "",
    prixAmmonix: "",
    prixTovex: "",
    prixDetos500ms: "",
    prixR65ms: "",
    prixR17ms: "",
    prixR25ms: "",
    prixR42ms: "",
    prixR100ms: "",
    prixLigne: "",
    prixAEI: "",
  });

  const options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "sales",
        data: [
          200000, 2000, 3000, 20000, 10000, 10000, 10000, 10000, 50000, 2000,
        ],
      },
    ],
    xaxis: {
      categories: [
        "ammonix",
        "tovex",
        "detos",
        "R17",
        "R25",
        "R42",
        "R65",
        "R100",
        "lign",
        "AEI",
      ],
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/gestion-stocks");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/gestion-stocks", formData);
      fetchData(); // Fetch data after adding
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/gestion-stocks/${id}`, formData);
      fetchData(); // Fetch data after updating
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/gestion-stocks/${id}`);
      fetchData(); // Fetch data after deleting
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="containerGetion">
      <h1
         style={{
          textAlign: "left",
          color: "rgba(255, 255, 255, 0.95)",
          display: "block",
          fontSize: "1.17em",
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        }}
      >
        GESTION DE STOCK
      </h1>
      <div
        className="search-bar"
        style={{
          width: "100%",
          color: "black",
        }}
      >
        {/* Barre de recherche */}
        <input
          placeholder="recherche"
          className="searchInput"
          style={{ padding: "3px 10px",height:"30px"}}
        />
        <button
          style={{ padding: "3px 10px" }}
          type="button"
          onClick={handleAdd}
          className="button"
        >
          Recherche
        </button>
      </div>
      <div className="container">
      <div className="tableContainer">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>Date-com</th>
                <th>Ammonix</th>
                <th>Tovex</th>
                <th>Detos</th>
                <th>R17</th>
                <th>R25</th>
                <th>R42</th>
                <th>R65</th>
                <th>R100</th>
                <th>Lign</th>
                <th>AEI</th>
                <th>État Coût</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.idCout}</td>
                  <td>{item.dateCommande}</td>
                  <td>{item.ammonix}</td>
                  <td>{item.tovex}</td>
                  <td>{item.detos500ms}</td>
                  <td>{item.raccord17}</td>
                  <td>{item.raccord25}</td>
                  <td>{item.raccord42}</td>
                  <td>{item.raccord65}</td>
                  <td>{item.raccord100}</td>
                  <td>{item.lign}</td>
                  <td>{item.aei}</td>
                  <td>{item.etatCout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="form-container">
          {/* Partie 2: Formulaire */}
          <form>
            <div className="formRow">
              <div className="formGroup">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formGroup">
                <label>id:</label>
                <input
                  type="number"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="formGroup">
                <label>Quantité Ammonix:</label>
                <input
                  type="number"
                  name="prixAmmonix"
                  value={formData.prixAmmonix}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formGroup">
                <label>Tovex:</label>
                <input
                  type="number"
                  name="prixTovex"
                  value={formData.prixTovex}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="formGroup">
                <label>Nbr Detos500ms:</label>
                <input
                  type="number"
                  name="prixDetos500ms"
                  value={formData.prixDetos500ms}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formGroup">
                <label>Nbr R17ms:</label>
                <input
                  type="number"
                  name="prixR17ms"
                  value={formData.prixR17ms}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label>Nbr R25ms:</label>
                <input
                  type="number"
                  name="prixR25ms"
                  value={formData.prixR25ms}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formGroup">
                <label>Nbr R42ms:</label>
                <input
                  type="number"
                  name="prixR42ms"
                  value={formData.prixR42ms}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="formGroup">
                <label>Nbr R65ms:</label>
                <input
                  type="number"
                  name="prixR65ms"
                  value={formData.prixR65ms}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formGroup">
                <label>Nbr R100ms:</label>
                <input
                  type="number"
                  name="prixR100ms"
                  value={formData.prixR100ms}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label> AEI:</label>
                <input
                  type="number"
                  name="prixAEI"
                  value={formData.prixAEI}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="formGroup">
                <label> Ligne:</label>
                <input
                  type="number"
                  name="prixLigne"
                  value={formData.prixLigne}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="button-container-bottom">
              {/* Boutons */}
              <button type="button" onClick={handleAdd} className="button">
                Ajouter
              </button>
              <button type="button" onClick={handleUpdate} className="button">
                Modifier
              </button>
              <button type="button" onClick={handleDelete} className="button">
                Supprimer
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={100}
              height={100}
              data={dataChart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
}

export default GestionStock;
