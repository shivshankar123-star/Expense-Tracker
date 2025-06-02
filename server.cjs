import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import { createObjectCsvWriter } from "csv-writer";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const filePath = "data.csv";
const fileExists = fs.existsSync(filePath);

// Create CSV with headers if it doesn't exist
if (!fileExists) {
  const headers = "Date,Description,Amount,Category\n";
  fs.writeFileSync(filePath, headers, "utf8");
}

const csvWriter = createObjectCsvWriter({
  path: filePath,
  header: [
    { id: "date", title: "Date" },
    { id: "description", title: "Description" },
    { id: "amount", title: "Amount" },
    { id: "category", title: "Category" },
  ],
  append: true, // Always append
});

app.post("/submit-expense", async (req, res) => {
  const { date, description, amount, category } = req.body;

  if (!date || !description || !amount || !category) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await csvWriter.writeRecords([
      { date, description, amount, category },
    ]);
    res.status(200).json({ message: "✅ Expense saved to CSV." });
  } catch (err) {
    console.error("❌ Error writing to CSV:", err);
    res.status(500).json({ message: "Failed to save expense." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
