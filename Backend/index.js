const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Meenakshi Patel",
    referralCode: "meenakshi2025",
    totalRaised: 12850
  });
});
app.get('/api/dashboard', (req, res) => {
  res.json({
    totalUsers: 150,
    totalRaised: 500000
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Meenakshi", raised: 12850 },
    { name: "Rahul", raised: 9800 },
    { name: "Anjali", raised: 7200 }
  ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
