export const getHealthStatus = (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'Pavna School Aligarh API Server is running smoothly',
    timestamp: new Date().toISOString(),
  });
};
