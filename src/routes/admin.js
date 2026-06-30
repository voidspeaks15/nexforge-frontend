const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Get admin dashboard stats
router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({
    totalUsers: 142,
    totalRevenue: 45000,
    totalVideos: 1240,
    totalViews: 512000,
    activeSubscriptions: 98,
    subscriptionBreakdown: {
      starter: 45,
      creator: 35,
      pro: 18
    },
    monthlyMetrics: {
      newUsers: 12,
      churnRate: 2.1,
      mrr: 12500,
      arr: 150000
    },
    topUsers: [
      { email: 'user1@example.com', videos: 87, views: 45000, tier: 'PRO' },
      { email: 'user2@example.com', videos: 62, views: 32000, tier: 'CREATOR' },
      { email: 'user3@example.com', videos: 48, views: 18000, tier: 'STARTER' }
    ],
    platformStats: {
      youtube: { videos: 720, views: 320000 },
      instagram: { videos: 520, views: 192000 }
    },
    revenueByTier: {
      starter: 13500,
      creator: 13300,
      pro: 18200
    }
  });
});

// Get all users
router.get('/users', authMiddleware, (req, res) => {
  res.json({
    users: [
      { id: 1, email: 'user1@example.com', tier: 'PRO', videosGenerated: 87, joinDate: '2026-01-15' },
      { id: 2, email: 'user2@example.com', tier: 'CREATOR', videosGenerated: 62, joinDate: '2026-02-20' },
      { id: 3, email: 'user3@example.com', tier: 'STARTER', videosGenerated: 48, joinDate: '2026-03-10' },
      { id: 4, email: 'user4@example.com', tier: 'PRO', videosGenerated: 95, joinDate: '2026-04-05' },
      { id: 5, email: 'user5@example.com', tier: 'CREATOR', videosGenerated: 71, joinDate: '2026-05-12' }
    ],
    totalUsers: 142
  });
});

// Get revenue analytics
router.get('/revenue', authMiddleware, (req, res) => {
  res.json({
    totalRevenue: 45000,
    monthlyRevenue: [
      { month: 'January', amount: 8200 },
      { month: 'February', amount: 9500 },
      { month: 'March', amount: 11200 },
      { month: 'April', amount: 12500 },
      { month: 'May', amount: 13000 },
      { month: 'June', amount: 12500 }
    ],
    mrr: 12500,
    arr: 150000,
    churnRate: 2.1,
    ltv: 2400
  });
});

module.exports = router;
