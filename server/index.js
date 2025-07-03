const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory data stores
let users = [];
let products = [{ id: 1, name: 'Demo Product', suppliers: ['AliExpress', 'Zendrop'] }];

// Onboarding endpoint
app.post('/api/onboarding', (req, res) => {
  users.push(req.body);
  res.json({ status: 'ok', user: req.body });
});

// Store preview endpoint
app.get('/api/store/preview', (req, res) => {
  res.json({ products });
});

// AI hints endpoint
app.get('/api/hints', (req, res) => {
  res.json({ hints: ['Click on the preview to see your store', 'Use the feedback button for questions'] });
});

// Test order endpoint
app.post('/api/test-order', (req, res) => {
  res.json({ status: 'order simulated', details: req.body });
});

// Feedback endpoint
app.post('/api/feedback', (req, res) => {
  console.log('Feedback:', req.body);
  res.json({ status: 'feedback received' });
});

// Learning center endpoint
app.get('/api/lessons', (req, res) => {
  res.json({ lessons: ['Lesson 1: Setup', 'Lesson 2: Marketing'] });
});

// Quiz submission
app.post('/api/quiz/submit', (req, res) => {
  res.json({ status: 'quiz submitted', score: 100 });
});

// Referral and affiliate endpoint
app.post('/api/referral', (req, res) => {
  res.json({ status: 'referral recorded', referrer: req.body.referrer });
});

// Goals endpoint
app.get('/api/goals', (req, res) => {
  res.json({ goals: ['Publish your store', 'Run your first ad'] });
});

// Smart product selector
app.get('/api/products/recommend', (req, res) => {
  res.json({ recommended: products });
});

// Server start
const PORT = 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));