import React, { useState } from "react";
import "../styles/CommandPage.css";

function CommandPage2() {
  const [formData, setFormData] = useState({
    date: "",
    Num_Commande: "",
    id_commande: "",
    panneau: "",
    tranche: "",
    niveau: "",
    mode_tir: "",
    foration: "",
    nombre_trous: "",
    nombre_ranges: "",
    trous_range: "",
    maille_banquette: "",
    espacement: "",
    decappage: "",
    profondeur: "",
    zone_tir: "LBRAYKIYIN",
    mode_charge: "unique",
    dosage_prevu: "",
    schema_tir: "17ms - 25 ms - 42 ms",
  });

  // const [results, setResults] = useState(null);

  const [submittedData, setSubmittedData] = useState(null); // addd

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (isFormValid) {
      // Calculer les résultats
      const longeur =
        parseInt(formData.espacement) * parseInt(formData.trous_range);
      const largeur =
        parseInt(formData.nombre_ranges) * parseInt(formData.maille_banquette);
      const surface = longeur * largeur;
      const volume = surface * parseInt(formData.profondeur);
      const ligneDeTir = 500;
      const ammonix =
        parseInt(formData.dosage_prevu) * volume * Math.pow(10, -3);
      const dosage = volume / ammonix;
      let tovex;
      if (formData.mode_charge === "unique") {
        tovex = parseInt(formData.trous_range) / 2;
      } else if (formData.mode_charge === "2_etage") {
        tovex = parseInt(formData.trous_range);
      } else {
        tovex = parseInt(formData.trous_range) * 3;
      }
      const aei = 1;
      const repartition =
        parseInt(formData.decappage.split("|")[1]) /
        parseInt(formData.nombre_trous);
      const chargeInstantanee = repartition * 25;
      const rendement = volume / 18;
      const metrageFore =
        parseInt(formData.nombre_trous) * parseInt(formData.profondeur);
      const detonateur = parseInt(formData.nombre_trous) + 2;

      const calculatedResults = {
        longeur: longeur,
        dosage: dosage,
        largeur: largeur,
        surface: surface,
        volume: volume,
        ligneDeTir: ligneDeTir,
        ammonix: ammonix,
        tovex: tovex,
        aei: aei,
        repartition: repartition,
        chargeInstantanee: chargeInstantanee,
        rendement: rendement,
        metrageFore: metrageFore,
        detonateur: detonateur,
      };
      setSubmittedData(calculatedResults);
    } else {
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  };

  return (
    <div className="App">
      <h2
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
        PARAMETRE DE SAUTAGE
      </h2>
      <div style={{ marginTop: "10px" }}>
        {/* Ajouter une marge pour éviter de masquer les champs de formulaire */}
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td colSpan={2}>
                <div className="form-group">
                  <label>Date :</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    // style={{width:"100px"}}
                  />
                </div>
              </td>

              <td>
                <div className="form-group">
                  <label htmlFor="niveau">Niveau :</label>
                  <select
                    id="niveau"
                    name="niveau"
                    value={formData.niveau}
                    onChange={handleChange}
                  >
                    <option value="R+C1">R+C1</option>
                    <option value="R+C2">R+C2</option>
                    <option value="R+C3">R+C3</option>
                    <option value="R+C4">R+C4</option>
                    <option value="R+C5">R+C5</option>
                    <option value="R+C6">R+C6</option>
                    <option value="Int1/2">Int1/2</option>
                    <option value="Int2/3">Int2/3</option>
                    <option value="Int3/4">Int3/4</option>
                    <option value="Int4/5">Int4/5</option>
                    <option value="Int5/6">Int5/6</option>
                    <option value="Int3/5">Int3/5</option>
                  </select>
                </div>
              </td>

              <td>
                <div className="form-group">
                  <label htmlFor="panneau">Panneau :</label>
                  <select
                    id="panneau"
                    name="panneau"
                    value={formData.panneau}
                    onChange={handleChange}
                  >
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                    <option value="P4">P4</option>
                    <option value="P5">P5</option>
                    <option value="P6">P6</option>
                    <option value="P7">P7</option>
                    <option value="P8">P8</option>
                  </select>
                </div>
              </td>

              <td>
                <div className="form-group">
                  <label htmlFor="tranche">Tranche :</label>
                  <input
                    type="text"
                    id="tranche"
                    name="tranche"
                    value={formData.tranche}
                    onChange={handleChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="id_commande">ID commande :</label>
                  <input
                    type="text"
                    id="id_commande"
                    name="id_commande"
                    value={formData.id_commande}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Num Commande:</label>
                  <input
                    type="number"
                    id="Num_Commande"
                    value={formData.Num_Commande}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="mode_tir">Mode de tir :</label>
                  <select
                    id="mode_tir"
                    name="mode_tir"
                    value={formData.mode_tir}
                    onChange={handleChange}
                  >
                    <option value="None">None</option>
                    <option value="Électrique">Électrique</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="foration">Foration :</label>
                  <select
                    id="foration"
                    name="foration"
                    value={formData.foration}
                    onChange={handleChange}
                  >
                    <option value="PV1">PV1</option>
                    <option value="DK6">DK6</option>
                    <option value="SKF1">SKF1</option>
                    <option value="SNF2">SNF2</option>
                    <option value="D500">D500</option>
                    <option value="D700">D700</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="nombre_trous">Nombre de trous :</label>
                  <input
                    type="number"
                    id="nombre_trous"
                    name="nombre_trous"
                    value={formData.nombre_trous}
                    onChange={handleChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <div className="form-group">
                  <label htmlFor="trous_range">
                    Nombre de trous sur rangée :
                  </label>
                  <input
                    type="number"
                    id="trous_range"
                    name="trous_range"
                    value={formData.trous_range}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="espacement">Maill :</label>
                  <div
                    style={{
                      display: "flex",
                      // justifyContent:"space-between",
                      marginRight: "30px",
                    }}
                  >
                    <select
                      id="espacement"
                      name="espacement"
                      className="espacement"
                      value={formData.espacement}
                      onChange={handleChange}
                      style={{
                        width: "calc((100% - 22px));",
                        // margin:"1px"
                      }}
                    >
                      {[...Array(10)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      id="maille_banquette"
                      name="maille_banquette"
                      className="maille_banquette"
                      value={formData.maille_banquette}
                      onChange={handleChange}
                      style={{
                        width: "calc((100% - 22px))",
                      }}
                    >
                      {[...Array(10)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="decappage">Décapage :</label>
                  <select
                    id="decappage"
                    name="decappage"
                    value={formData.decappage}
                    onChange={handleChange}
                  >
                    <option value="7500|1">7500|1</option>
                    <option value="7500|2">7500|2</option>
                    <option value="PH1">PH1</option>
                    <option value="PH2">PH2</option>
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>

              <td>
                <div className="form-group">
                  <label htmlFor="profondeur">Profondeur :</label>
                  <input
                    type="text"
                    id="profondeur"
                    name="profondeur"
                    value={formData.profondeur}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="zone_tir">Zone de tir :</label>
                  <select
                    id="zone_tir"
                    name="zone_tir"
                    value={formData.zone_tir}
                    onChange={handleChange}
                  >
                    <option value="LBRAYKIYIN">LBRAYKIYIN</option>
                    <option value="LBHIRA">LBHIRA</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="mode_charge">Mode de charge :</label>
                  <select
                    id="mode_charge"
                    name="mode_charge"
                    value={formData.mode_charge}
                    onChange={handleChange}
                  >
                    <option value="unique">Unique</option>
                    <option value="2_etage">2 étage</option>
                    <option value="3_etage">3 étage</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <div className="form-group">
                  <label htmlFor="dosage_prevu">Dosage prévu :</label>
                  <input
                    type="text"
                    id="dosage_prevu"
                    name="dosage_prevu"
                    value={formData.dosage_prevu}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="schema_tir">Schéma de tir :</label>
                  <select
                    id="schema_tir"
                    name="schema_tir"
                    value={formData.schema_tir}
                    onChange={handleChange}
                  >
                    <option value="17ms - 25 ms - 42 ms">
                      17ms - 25 ms - 42 ms
                    </option>
                    <option value="17ms - 25ms - 42ms - 65ms">
                      17ms - 25ms - 42ms - 65ms
                    </option>
                    <option value="42ms - 17ms">42ms - 17ms</option>
                    <option value="100ms - 17ms">100ms - 17ms</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="nombre_ranges">Nombre de rangées :</label>
                  <input
                    type="number"
                    id="nombre_ranges"
                    name="nombre_ranges"
                    value={formData.nombre_ranges}
                    onChange={handleChange}
                  />
                </div>
              </td>
            </tr>
          </table>

          <div className="form-row">
            <button type="submit" onClick={handleSubmit} className="button">
              Calculer
            </button>
            {/* onClick={handleSubmit} */}
            <button type="reset" className="button">
              Effacer
            </button>
          </div>
        </form>

        {submittedData && (
          <div>
            <h3>Résultats du dernier calcul :</h3>
            <form>
              <table>
                <tr>
                  <td>
                    <div className="form-group">
                      <label>longeur :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.longeur.toFixed(2) + " m"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>

                  <td>
                    <div className="form-group">
                      <label htmlFor="largeur">largeur:</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.largeur.toFixed(2) + " m"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>

                  <td>
                    <div className="form-group">
                      <label htmlFor="surface">surface :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.surface.toFixed(2) + " m²"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>

                  <td>
                    <div className="form-group">
                      <label htmlFor="volume">volume :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.volume.toFixed(2) + " m³"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-group">
                      <label htmlFor="Ammonix">Ammonix :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.ammonix.toFixed(2) + " Kg"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <label htmlFor="dosage">dosage :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.dosage.toFixed(2) + " g/m³"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <label htmlFor="tovex">tovex :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.tovex.toFixed(2) + " Kg"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <label htmlFor="raccordes">raccordes :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.longeur.toFixed(2) + " U"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-group">
                      <label htmlFor="ligneDeTir">ligne De Tir :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.ligneDeTir.toFixed(2) + " m"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <label htmlFor="A_E_I">A-E-I :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.aei.toFixed(2) + " U"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <label htmlFor="charge_nstantanee">
                        charge instantanee :
                      </label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={
                          submittedData.chargeInstantanee.toFixed(2) + " Kg"
                        }
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <label htmlFor="repartition">repartition :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={
                          submittedData.repartition.toFixed(2) + " Sac/trou"
                        }
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="form-group">
                      <label htmlFor="rendement">rendement :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.rendement.toFixed(2) + " m³/h"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>

                  <td>
                    <div className="form-group">
                      <label htmlFor="metrage_fore">metrage fore :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.metrageFore.toFixed(2) + " ml/h"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <label htmlFor="detonateur">detonateur :</label>
                      <input
                        type="TEXT"
                        id=""
                        name=""
                        value={submittedData.detonateur.toFixed(2) + " ms"}
                        readOnly // Rendre le champ en lecture seule
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommandPage2;
