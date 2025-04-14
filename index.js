const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const key = JSON.parse(process.env.GOOGLE_SERVICE_KEY);

const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

app.post("/updateEstimateRow", async (req, res) => {
  const { spreadsheetId, range, values, valueInputOption = "USER_ENTERED" } = req.body;

  try {
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption,
      requestBody: { values },
    });

    res.json({
      status: "success",
      updatedRange: response.data.updatedRange,
      updatedCells: response.data.updatedCells,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));