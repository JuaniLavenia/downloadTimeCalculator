import { useState } from "react";

function DownloadTimeCalculator() {
  const [fileSize, setFileSize] = useState("");
  const [downloadSpeed, setDownloadSpeed] = useState("");
  const [downloadTime, setDownloadTime] = useState("");
  const [fileSizeUnit, setFileSizeUnit] = useState("MB");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileSizeInMB =
      fileSizeUnit === "GB"
        ? parseFloat(fileSize) * 1024
        : parseFloat(fileSize);
    const downloadTimeInSeconds = fileSizeInMB / (downloadSpeed / 8);
    const hours = Math.floor(downloadTimeInSeconds / 3600);
    const minutes = Math.floor((downloadTimeInSeconds % 3600) / 60);
    const seconds = Math.floor(downloadTimeInSeconds % 60);

    const formattedTime = `${hours}h ${minutes}m ${seconds}s`;

    setDownloadTime(formattedTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fileSize" className="form-label">
          Tamaño del archivo:
        </label>
        <input
          min={0}
          type="text"
          id="fileSize"
          value={fileSize}
          onChange={(e) => setFileSize(e.target.value)}
          required
          className="form-control"
        />
        <label htmlFor="fileSizeUnit" className="form-label">
          Unidad de medida:
        </label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="fileSizeUnitMB"
              value="MB"
              checked={fileSizeUnit === "MB"}
              onChange={(e) => setFileSizeUnit(e.target.value)}
            />
            <label className="form-check-label" htmlFor="fileSizeUnitMB">
              MB
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="fileSizeUnitGB"
              value="GB"
              checked={fileSizeUnit === "GB"}
              onChange={(e) => setFileSizeUnit(e.target.value)}
            />
            <label className="form-check-label" htmlFor="fileSizeUnitGB">
              GB
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="downloadSpeed" className="form-label">
          Velocidad de descarga (MB/s):
        </label>
        <input
          min={0}
          type="number"
          id="downloadSpeed"
          value={downloadSpeed}
          onChange={(e) => setDownloadSpeed(e.target.value)}
          required
          className="form-control"
        />
      </div>

      <button className="btn btn-success" type="submit">
        Calcular tiempo de descarga
      </button>

      {downloadTime && <p>Tiempo estimado de descarga: {downloadTime}</p>}
    </form>
  );
}

export default DownloadTimeCalculator;
