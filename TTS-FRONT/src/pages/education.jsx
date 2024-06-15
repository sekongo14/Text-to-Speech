import "./../assets/css/education.css";

function Education() {
  return (
    <div className="Education">
      <div className="container">
        <h1>
          Text to Speech <span>Convertisseur</span>
        </h1>
        <textarea placeholder="Écrivez quelque chose ici...."></textarea>
        <div className="row">
          <div className="speech-parameters mt-2">
            <div>
              <span className="word-count">
                Mots:
                <span id="word-total">124</span>
                <span className="separation-line">|</span>
                Lignes:
                <span id="line-total">1</span>
              </span>
            </div>

            <div className="row">
              <div className="input-group mb-2 input-range-diy col-lg-6">
                <div className="input-group-prepend">
                  <div className="input-group-text">La rapidité</div>
                </div>
                <input
                  type="range"
                  className="custom-range"
                  id="speech-speed"
                  max="3"
                  min="0"
                  step="0.01"
                  value="1"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="speech-speed-text">
                    x1
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <form action="/upload" method="post" encType="multipart/form-data">
              <label htmlFor="pdfUpload">Téléverser un fichier PDF :</label>
              <input
                type="file"
                id="pdfUpload"
                name="pdfUpload"
                accept="application/pdf"
              />
            </form>

            <button type="button" id="play" className="btn btn-success">
              Play
              <i className="fas fa-play-circle"></i>
            </button>

            <button type="button" id="download" className="btn btn-info">
              Télécharger
              <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
