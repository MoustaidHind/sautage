import React, { useState } from "react";
import "../styles/SautagePage.css";
import logoOcp from '../images/ocp.png';

const SautagePage = () => {
  // Déclaration des états pour les champs du formulaire
  const [date, setDate] = useState("");
  const [numeroExecution, setNumeroExecution] = useState("");
  const [numeroCommande, setNumeroCommande] = useState("");
  const [hArriveeCamions, setHArriveeCamions] = useState("");
  const [blfArtifices, setBlfArtifices] = useState("");
  const [effictif, setEffictif] = useState("");
  const [blfAmmonix, setBlfAmmonix] = useState("");
  const [bsTovexArtifices, setBsTovexArtifices] = useState("");
  const [son, setSon] = useState("");
  const [blfTovex, setBlfTovex] = useState("");
  const [type, setType] = useState("");
  const [frequence, setFrequence] = useState("");
  const [heureTir, setHeureTir] = useState("");
  const [bsAmmonix, setBsAmmonix] = useState("");
  const [vitesse, setVitesse] = useState("");
  const [observation, setObservation] = useState("");

  // Fonction pour gérer l'envoi des données au backend
  const handleAjouter = async (e) => {
    e.preventDefault();
    // Effectuez votre logique pour envoyer les données au backend (Laravel API)
    const data = {date,numeroExecution,numeroCommande,hArriveeCamions,blfArtifices,effictif,blfAmmonix,
        bsTovexArtifices,son,blfTovex,type,frequence,heureTir,bsAmmonix,vitesse,observation,
    };
    console.log(data); // C'est là que vous enverriez les données à votre API Laravel
  };
  const handleChangeObservation = (event) => {
    setObservation(event.target.value);
  };

  // Fonction pour gérer la modification des données
  const handleModifier = async () => {
    // Logique pour la modification des données
  };

  // Fonction pour gérer la suppression des données
  const handleSupprimer = async () => {
    // Logique pour la suppression des données
  };

  return (
    <div style={{marginLeft:"90px"}}>
      <div  style={{display:"flex",justifyContent:"space-between"}}>
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
          // marginLeft:
        }}
        >
          APRES SAUTAGE
        </h1>
      </div>
         
      <div style={{ marginTop: "10px" }}>
        {/* Ajouter une marge pour éviter de masquer les champs de formulaire */}
       {/* <form className="form" > onSubmit={handleSubmit} */}
          <table>
            <tr>
              <td colSpan={2}>
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">H.Arrivé Camions:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={hArriveeCamions}
                    onChange={(e) => setHArriveeCamions(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Blf Artifices:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={blfArtifices}
                    onChange={(e) => setBlfArtifices(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Fréquence (HZ):</label>
                  <input
                    type="number"
                    id="numero-execution"
                    value={frequence}
                    onChange={(e) => setFrequence(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Num d'exécution:</label>
                  <input
                    type="number"
                    id="numero-execution"
                    value={numeroExecution}
                    onChange={(e) => setNumeroExecution(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Num Commande:</label>
                  <input
                    type="number"
                    id="numero-execution"
                    value={numeroCommande}
                    onChange={(e) => setNumeroCommande(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Effictif:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={effictif}
                    onChange={(e) => setEffictif(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Blf Ammonix:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={blfAmmonix}
                    onChange={(e) => setBlfAmmonix(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Vitesse (mm/s):</label>
                  <input
                    type="number"
                    id="numero-execution"
                    value={vitesse}
                    onChange={(e) => setVitesse(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Bs Tovex Artifices:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={bsTovexArtifices}
                    onChange={(e) => setBsTovexArtifices(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Son (db):</label>
                  <input
                    type="number"
                    id="numero-execution"
                    value={son}
                    onChange={(e) => setSon(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Blf Tovex:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={blfTovex}
                    onChange={(e) => setBlfTovex(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>

              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Type:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Heure de Tir:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={heureTir}
                    onChange={(e) => setHeureTir(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="numero-execution">Bs Ammonix:</label>
                  <input
                    type="text"
                    id="numero-execution"
                    value={bsAmmonix}
                    onChange={(e) => setBsAmmonix(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td colSpan={3}>
                <div className="form-group">
                  <label htmlFor="observation">Observation:</label>
                  <textarea
                    id="observation"
                    value={observation}
                    onChange={handleChangeObservation}
                    rows={5} // Spécifiez le nombre de lignes visible
                    cols={150} // Spécifiez la largeur en nombre de caractères
                  />
                </div>
              </td>
            </tr>
          </table>

          {/* Boutons --> utiliser des function*/}
          <div className="btn-container">
            <button
              style={{ backgroundColor: "#45a049" }}
              className="btn btn-ajouter"
              type="submit"
              onClick={handleAjouter}
            >
              AJOUTER
            </button>
            <button
              style={{ backgroundColor: "#45a049" }}
              className="btn btn-modifier"
              type="button"
              onClick={handleModifier}
            >
              MODIFIER
            </button>
            <button style={{ backgroundColor: "#45a049" }} 
            className="btn btn-supprimer" 
            type="button"
            onClick={handleSupprimer}
            >
              SUPPRIMER
            </button>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default SautagePage;