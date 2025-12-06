
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Rutas de archivos
const ENCONTRADOS_PATH = "C:/Users/benja/Documents/OBJETOSPERDIDO/BaseDATOS.json";
const PERDIDOS_PATH = "C:/Users/benja/Documents/OBJETOSPERDIDO/BaseDATOSReportes.json";

// Asegurar archivos
function ensureFile(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]", "utf-8");
  console.log("[DB] Asegurada:", filePath);
}
ensureFile(ENCONTRADOS_PATH);
ensureFile(PERDIDOS_PATH);

// Funciones para leer y escribir
function readDB(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    console.error("[ERR readDB]", err);
    return [];
  }
}

function writeDB(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("[ERR writeDB]", err);
    return false;
  }
}

// ---- ENCONTRADOS ----
app.post("/api/guardar", (req, res) => {
  try {
    const nuevo = req.body;
    console.log("[POST /api/guardar] payload:", nuevo);

    if (!nuevo.nombre || !nuevo.descripcion || !nuevo.categoria || !nuevo.lugar || !nuevo.fecha) {
      return res.status(400).json({ mensaje: "Faltan campos obligatorios." });
    }

    nuevo.id = Date.now();
    nuevo.tipo = "encontrado";
    nuevo.clase = nuevo.clase || "Encontrado";
    nuevo.fechaRegistro = new Date().toISOString();

    const datos = readDB(ENCONTRADOS_PATH);
    datos.push(nuevo);

    if (!writeDB(ENCONTRADOS_PATH, datos)) {
      return res.status(500).json({ mensaje: "Error al escribir en BaseDATOS.json." });
    }

    console.log("[OK] guardado ENCONTRADO id=", nuevo.id);
    res.json({ mensaje: "Objeto encontrado registrado exitosamente." });
  } catch (err) {
    console.error("[ERR /api/guardar]", err);
    res.status(500).json({ mensaje: "Error al guardar objeto encontrado." });
  }
});

app.get("/api/solicitudes", (req, res) => {
  try {
    const datos = readDB(ENCONTRADOS_PATH);
    res.json(datos);
  } catch (err) {
    console.error("[ERR /api/solicitudes]", err);
    res.json([]);
  }
});

// ---- PERDIDOS ----
app.post("/api/reportar-perdido", (req, res) => {
  try {
    const nuevo = req.body;
    console.log("[POST /api/reportar-perdido] payload:", nuevo);

    if (!nuevo.nombre || !nuevo.descripcion || !nuevo.categoria || !nuevo.lugar || !nuevo.fecha) {
      return res.status(400).json({ mensaje: "Faltan campos obligatorios." });
    }

    nuevo.id = Date.now();
    nuevo.tipo = "perdido";
    nuevo.clase = nuevo.clase || "Perdido";
    nuevo.fechaRegistro = new Date().toISOString();

    const datos = readDB(PERDIDOS_PATH);
    datos.push(nuevo);

    if (!writeDB(PERDIDOS_PATH, datos)) {
      return res.status(500).json({ mensaje: "Error al escribir en BaseDATOSReportes.json." });
    }

    console.log("[OK] guardado PERDIDO id=", nuevo.id);
    res.json({ mensaje: "Reporte de objeto perdido registrado exitosamente." });
  } catch (err) {
    console.error("[ERR /api/reportar-perdido]", err);
    res.status(500).json({ mensaje: "Error al guardar reporte perdido." });
  }
});

app.get("/api/reportes-perdidos", (req, res) => {
  try {
    const datos = readDB(PERDIDOS_PATH);
    res.json(datos);
  } catch (err) {
    console.error("[ERR /api/reportes-perdidos]", err);
    res.json([]);
  }
});

// Servir archivos estáticos (si usas carpeta public)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
